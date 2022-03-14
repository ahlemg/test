import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate";

const Schema = mongoose.Schema;

const ExampleModelSchema = new Schema(
  {
    email: {
      type: String,
      default: "",
      required: true
    },
    name: {
      type: String,
      default: "",
      required: true
    }
  },
  { timestamps: true }
);

ExampleModelSchema.plugin(mongoosePaginate);
const ExampleModel = mongoose.model("Example", ExampleModelSchema);

ExampleModel.paginate().then({});
export default ExampleModel;
