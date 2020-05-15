import User from './../models/User'
import sha256 from 'sha256'
import { generateToken } from './../service/sessions'

const userResolver = {
    Query: {
        async getUser(){
            const all_user = await User.find() 
            return all_user
        }
    },
    Mutation: {
        async createUser(root, { input }) {
            input.password = sha256(input.password)
            const newUser = new User(input)
            await newUser.save()
            return newUser
        },        
        async updateUser(root, { _id, input }) {
            return await User.findByIdAndUpdate(_id, input, {new: true})
        },
        async deleteUser(root, { _id }) {
            return await User.findByIdAndDelete(_id)
        },
        async loginUser(root, { _id, input }) {
            console.log(input.email, input.password)
            const user_login = await User.find( { email: input.email, password: input.password } )
            return generateToken(user_login[0])
        }
    }
}

export default userResolver