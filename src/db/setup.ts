import { connect, connection } from "mongoose";

const dbUrl = process.env.DB_URL;

const connect2db = async (): Promise<void> => {
	await connect("mongodb://localhost:27017/chat'", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	}).then(() => {
    console.log('were connected!')
  })
	const db = connection;
	db.on('error', console.log.bind(console, 'connection error'));
	db.once("open", () => {
		return console.log("were connected!");
	});
};

export default connect2db;
