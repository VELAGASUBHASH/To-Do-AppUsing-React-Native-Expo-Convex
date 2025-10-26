import { v } from 'convex/values';
import { mutation, query } from "./_generated/server";
export const getTodos = query({
    handler:async(contex)=>{
        const todos = await contex.db.query("todo").order("desc").collect()
        return todos;
    }
})


export const addTodo = mutation({
    args:{text:v.string()},
    handler : async(context,args)=>{
        const todoId = await context.db.insert("todo",{
            text: args.text,
            isCompleted:false
        })
        return todoId;
    }
})

export const ToggleTodo = mutation({
    args:{id:v.id("todo")},
    handler: async (context,args)=>{
        const toggletodos = await context.db.get(args.id)
        if(!toggletodos){
            throw new Error("ToDo Not Found");
        }else{
            await context.db.patch(args.id,{
                isCompleted: !toggletodos.isCompleted
            })
        }
    }
})

export const deletetodo=mutation({
    args: {id:v.id("todo")},
    handler: async(context,args)=>{
        await context.db.delete(args.id);
    }
});

export const updatetodo=mutation({
    args: {
        id:v.id("todo"),
        text:v.string(),

    },
    handler: async(context,args)=>{
        await context.db.patch(args.id,{
            text: args.text,
        });
    },
});

export const deleteAllTodo = mutation({
    handler: async(context)=>{
        const todos = await context.db.query("todo").collect();

        for(const todo of todos){
            await context.db.delete(todo._id);
        }
        return {deleteCount: todos.length};
    },
});