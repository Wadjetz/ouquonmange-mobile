import { LoginAction } from "~/login/LoginActions"

export interface LoginState {
  email: string
  password: string
  loading: boolean
  error?: any
}

const initLoginState: LoginState = {
  email: "egor.neon@gmail.com1",
  password: "273006",
  loading: false
}

export default function LoginReducer(state: LoginState = initLoginState, action: LoginAction): LoginState {
  switch (action.type) {
    case "LOGIN_CHANGE": return { ...state, [action.field]: action.value }
    case "LOGIN_SUBMIT": return { ...state, loading: true, error: undefined }
    case "LOGIN_SUBMIT_SUCCESS": return { ...state, loading: false, email: "", password: "" }
    case "LOGIN_SUBMIT_ERROR": return { ...state, error: action.error, loading: false }
    default: return state
  }
}
