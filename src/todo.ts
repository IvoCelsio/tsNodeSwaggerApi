import * as mongoose from 'mongoose';

interface ITodo {
   id: string;
   description: string;
}

const TodoSchema = new mongoose.Schema({
   description: String
});

const TodoModel = mongoose.model('todo', TodoSchema);

export { TodoModel, ITodo };
