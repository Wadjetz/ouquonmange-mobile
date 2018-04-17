import { Observable } from "rxjs"
import * as Validation from "validation.ts"
import { AjaxResponse, AjaxError } from "rxjs/observable/dom/AjaxObservable"

const API_URL = "https://ouquonmange.berezovskiy.fr"

export type BadRequestError = Record<string, string[]>

export interface BadRequest {
  type: "BadRequest"
  errors: BadRequestError
}

export interface Unautorized {
  type: "Unautorized"
}

export interface Unknown {
  type: "Unknown",
  error: AjaxError
}

export interface Ok<D> {
  type: "Ok"
  data: D
}

type ApiResponse<D> = Ok<D> | BadRequest | Unautorized | Unknown
type ApiError = BadRequest | Unautorized | Unknown

export function authenticate(email: string, password: string): Promise<any> {
  /*return Observable.ajax({
    url: `${API_URL}/auth/local/login`,
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
  })map(chackModel(Validation.object({ token: Validation.string })))
  */
  console.log("authenticate")
  return fetch(`${API_URL}/auth/local/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
  })
}

function chackModel<T>(validator: Validation.Validator<T>):(response: AjaxResponse) => T {
  return (response: AjaxResponse) => {
    const result = validator.validate(response.response)
    if (!result.isOk()) {
      console.error(result.get())
    }
    return response.response
  }
}

function handleError<T>(error: AjaxError): Observable<ApiResponse<T>> {
  if (error.status === 401) {
    return Observable.of<ApiResponse<T>>({ type: "Unautorized" })
  } else if (error.status === 400) {
    return Observable.of<ApiResponse<T>>({ type: "BadRequest", errors: error.response})
  } else {
    return Observable.of<ApiResponse<T>>({ type: "Unknown", error })
  }
}

function handleSuccess<T>(validator: Validation.Validator<T>): (response: AjaxResponse) => ApiResponse<T> {
  return (response: AjaxResponse) => {
    const result = validator.validate(response.response)
    if (result.isOk()) {
      return { type: "Ok", data: result.get() }
    } else {
      return { type: "BadRequest", errors: result.get() as any }
    }
  }
}

function validate<T>(value: T, validator: Validation.Validator<T>) {
  const result = validator.validate(value)
  if (result.isOk()) {
    return Promise.resolve(value)
  } else {
    const error = result.get()
    console.error("Response json error", error, value, validator)
    return Promise.reject(error)
  }
}

/*
function success<T>(validator: Validation.Validator<T>): (response: AjaxResponse) => ApiResponse<T> {
  return (response: AjaxResponse) => {
    if (response.status >= 200 && response.status < 300) {
      const result = validator.validate(response.response)
      if (result.isOk()) {
        return { type: "Ok", data: result.get() }
      } else {
        return { type: "BadRequest", errors: result.get() }
      }
    } else if (response.status === 401) {
      return { type: "Unautorized" }
    } else if (response.status === 400) {
      return { type: "BadRequest", errors: response.response }
    } else {
      return { type: "Unknown", response }
    }
  }
}

*/


/*
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
*/
