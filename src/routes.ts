import Home from '@/views/Home'
import Expense from '@/views/Expense'

const routes = [
    { title: `Home`, path: `/`, component: Home, requiresAuth: false, exact: true},
    { title: `Expense`, path: `/expense`, component: Expense, requiresAuth: false, exact: false},
]


export default routes