export type LoginAction =
  LOGIN_CHANGE |
  LOGIN_SUBMIT |
  LOGIN_SUBMIT_SUCCESS |
  LOGIN_SUBMIT_ERROR

export type LOGIN_CHANGE = {
  type: "LOGIN_CHANGE"
  field: string
  value: string
}
export function loginChange(field: string, value: string) {
  return { type: "LOGIN_CHANGE", field, value }
}

export type LOGIN_SUBMIT = {
  type: "LOGIN_SUBMIT"
  email: string
  password: string
}
export function loginSubmit(email: string, password: string) {
  return { type: "LOGIN_SUBMIT", email, password }
}

export type LOGIN_SUBMIT_SUCCESS = {
  type: "LOGIN_SUBMIT_SUCCESS"
  token: string
}
export function loginSubmitSuccess(token: string) {
  return { type: "LOGIN_SUBMIT_SUCCESS", token }
}

export type LOGIN_SUBMIT_ERROR = {
  type: "LOGIN_SUBMIT_ERROR"
  error: any
}
export function loginSubmitError(error: any) {
  return { type: "LOGIN_SUBMIT_ERROR", error }
}
