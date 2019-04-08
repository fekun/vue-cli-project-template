export default {
    render() {
        return (
            <p onClick={this.click}>jsx</p>
        )
    },
    methods: {
        async click() {
            let response = await this.$axios.get("https://www.easy-mock.com/mock/5c46cf35ecdb695a28c0d4c2/beisen/overtiem-detail")
            console.log(response)
        }
    }
}