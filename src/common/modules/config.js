const BaseApiUrl = process.env.NODE_ENV === 'production' ? 'http://localhost:8080' : 'http://localhost:8080'
export default {
  AccountApiPath: BaseApiUrl + '/account/',
}
