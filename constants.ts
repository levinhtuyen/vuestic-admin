// ============================================
// The keys of the localstorage
// ============================================

// export const LS_ACCESS_TOKEN = 'h-access';

export const LS_REFRESH_TOKEN = 'h-refresh'

export const LS_ACCOMMODATION_ID = 'h-accommodation-id'

export const LS_USER_ID = 'h-user-id'

export const LS_LOCALE = 'h-locale'

export const LS_ACCESS_TOKEN = 'access_token'

export const LS_PROFILE = 'profile'

// =============================
// URL addresses
// =============================

// Server api address (development).
export const DEV_API_URL = ''

export const STAG_API_URL = ''

// Server api address (production).
export const PROD_API_URL = ''

// =============================
// Regular Expressions
// =============================

export const VN_TEL_REGEX = /^\d+$/

export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

//-----------------------------------Globals -----------------------------------
export const FORMAT_DATE_UI = 'YYYY/MM/DD HH:mm'
export const FORMAT_DATE_VALUE = 'YYYY-MM-DD HH:mm'
export enum GUESTS_ACTIONS {
  NEW_GUEST = 'New guest',
  AVAILABLE_GUEST = 'Available guest',
}
