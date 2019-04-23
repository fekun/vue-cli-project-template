import style from './assets/css/app.scss'
export default {
  render () {
    return (
      <div id={style.app}>
        <router-link to="/">home</router-link>
        <router-link to="/me">me</router-link>
        <router-link to="/jsx">jsx</router-link>
        <router-view />
      </div>
    )
  }
}
