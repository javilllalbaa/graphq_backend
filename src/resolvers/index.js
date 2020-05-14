import { merge } from 'lodash'
import userResolver from './user.resolvers'
import productResolver from './product.resolvers'

const resolvers = merge(userResolver, productResolver);

export default resolvers;
