import style from "../assets/css/test.css"
export default {
    created() {
    },
    render() {
        return (
            <div onClick={this.click} class={style.test}>jsx</div>
        )
    },
    methods: {
        async click() {
            let response = await this.$axios.get("https://www.easy-mock.com/mock/5c46cd90eaf31779b928ae07/example/mock")
            console.log(response)
        }
    }
}