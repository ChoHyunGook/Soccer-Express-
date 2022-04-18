module.exports = mongoose => mongoose.model('article',
        mongoose.Schema(
           {passengerId: String,
            name: String,
            teamId: String,
            subject: String
            }, {timestamps: true}
        )
    )