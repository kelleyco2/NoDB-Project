let coins = []
let id = 1

module.exports = {
    getCoins: (req, res) => {
        res.status(200).send(coins)
    },

    createCoins: (req, res) => {
        let { rank, name, marketCap, price, change, num} = req.body
        let coin = {
            rank,
            name,
            marketCap,
            price,
            change,
            num,
            id
        }
        id++
        coins.push(coin)
        res.status(200).send(coins)
    },

    updateCoins: (req, res) => {
        let { amount } = req.body
        let {id} = req.params
        console.log('before',coins)
        for(let i = 0; i < coins.length; i++) {
            if(coins[i].id === Number(id)) {
                coins[i].num = amount
            }
        }
        console.log('after',coins)
        res.status(200).send(coins)

        },


    deleteCoins: (req, res) => {
        let {id} = req.params
        for(let i = 0; i < coins.length; i++) {
            if(coins[i].id === Number(id)) {
                coins.splice(i, 1)
            }
        }
        res.status(200).send(coins)
    }
}