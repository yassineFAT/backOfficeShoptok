module.exports = mongoose => {
    const Video = mongoose.model(
      "video",
      mongoose.Schema(
        {
          title: String,
          description: String,
          likes:Number,
          song:String,
          published: Boolean
        },
        { timestamps: true }
      )
    );
    
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });


    const Video = mongoose.model("Video", schema);
    return Video;
  };