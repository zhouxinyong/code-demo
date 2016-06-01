import RootDev from './Root.dev'
import RootProd from './Root.prod'
// process.env = 'production'
// console.log(process.env)
const Root = process.env === 'production' ? RootProd : RootDev
export default Root
