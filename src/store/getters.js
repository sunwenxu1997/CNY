const getters = {
  token: (state) => state.user.token,
  avatar: (state) => state.user.avatar,
  name: (state) => state.user.name,
  appId: (state) => state.user.appId,
  memberId: (state) => state.user.memberId,
  openid: (state) => state.user.openid
}
export default getters
