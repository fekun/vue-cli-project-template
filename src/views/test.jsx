export default {
    render() {
        return (
            <p onClick={this.click}>jsx</p>
        )
    },
    methods: {
        async click() {
            let response = await this.$axios.get("https://www.easy-mock.com/mock/5c46cd90eaf31779b928ae07/example/mock")
            console.log(response)
        }
    }
}