import style from '../assets/css/test.scss'
export default {
  created () {
  },
  methods: {
    async click () {
      let response = await this.$axios.get('https://www.easy-mock.com/mock/5c46cd90eaf31779b928ae07/example/mock')
      console.log(response)
    }
  },
  render () {
    return (
      <div onClick={this.click} class={style.test}>jsx</div>
    )
  }
}
