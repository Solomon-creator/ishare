
//1.Create a model for users. friend list with token from friend 
    var Schema = mongoose.Schema
    const usersSchema = new Schema({
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      friends: [{ type: Schema.Types.ObjectId, ref: 'Friends'}]
    }, {timestamps: true})
    module.exports = mongoose.model('Users', usersSchema)

  // 2. Create a model for friends having enums for accepted, rejected, pending and requested.
    // also need to contain token 
    // should token having userA Id  no the token contain only team generated param
    // team token 

    const friendsSchema = new Schema({
      requester: { type: Schema.Types.ObjectId, ref: 'Users'},
      recipient: { type: Schema.Types.ObjectId, ref: 'Users'},
      status: {
        type: Number,
        enums: [
            0,    //'add friend',
            1,    //'requested',
            2,    //'pending',
            3,    //'friends'
        ]
      }
    }, {timestamps: true})
    module.exports = mongoose.model('Friends', friendsSchema) 

// 3. A send request to B 
    const docA = await Friend.findOneAndUpdate(
        { requester: UserA, recipient: UserB },
        { $set: { status: 1 }},
        { upsert: true, new: true }
    )
    const docB = await Friend.findOneAndUpdate(
        { recipient: UserA, requester: UserB },
        { $set: { status: 2 }},
        { upsert: true, new: true }
    )
    // A have request
    const updateUserA = await User.findOneAndUpdate(
        { _id: UserA },
        { $push: { friends: docA._id }}
    )
    // B have pending 
    const updateUserB = await User.findOneAndUpdate(
        { _id: UserB },
        { $push: { friends: docB._id }}
    )

    //4. If UserB acceptes the request
    // update UserB token list 

    Friend.findOneAndUpdate(
        { requester: UserA, recipient: UserB },
        { $set: { status: 3 }}
    )
    // update User A team list  message  post member list 
    // list have avatar which link to user  use Link method 
    // taking userId to user Home 
    Friend.findOneAndUpdate(
        { recipient: UserA, requester: UserB },
        { $set: { status: 3 }}
    )
 // now User B has token to get into the team post and message 
 // user B can get into message of team and post of team 
 // update user B message and post system which belong to personal
 // update user database  
 // use datalayer to update the database 
 //  database of message and post system 

 