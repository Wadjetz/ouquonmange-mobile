import { Observable } from "rxjs"
import { Validator, object } from "validation.ts"
import "rxjs/add/operator/mergeMap"

const API_URL = "https://ouquonmange.berezovskiy.fr"
const HEADERS = [
  ["Content-Type", "application/json"]
]

export function authenticate(email: string, password: string): Promise<any> {
  const options = {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: HEADERS,
  }
  return fetch(`${API_URL}/auth/local/login`, options)
        .then(success(object({})))
}

function validate<T>(value: T, validator: Validator<T>) {
  const result = validator.validate(value)
  if (result.isOk()) {
    return Promise.resolve(value)
  } else {
    const error = result.get()
    console.error("Response json error", error, value, validator)
    return Promise.reject(error)
  }
}

export function success<T>(validator?: Validator<T>) {
  return function(response: Response) {
    if (response.status === 204) {
      return
    } else if (response.status >= 200 && response.status < 300) {
      if (!!validator) {
        return response.json()
              .then(res => validate(res, validator))
      } else {
        return response.json()
      }
    } else if (response.status === 401) {
      return response.json()
        .then(error => Promise.reject(error))
    } else {
      return response.json().then(error => Promise.reject(error))
    }
  }
}
