/* eslint-disable no-undef */

const todoList = require("../level3");

const { all, markAsComplete, add } = todoList();
const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const later = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);

const todoItemsCount = all.length;

const toDisplayableList = () => {
  describe("Todolist Test Suite", () => {
    
    test("checks creating new todo ", () => {
      expect(all.length).toBe(0);
      
    });
    test("should add new todo ", () => {
      add(
        { title: "Test todo", completed: false, dueDate: today },
        { title: "Submit assignment", dueDate: yesterday, completed: false },
        { title: "Pay rent", dueDate: today, completed: true },
        { title: "Service Vehicle", dueDate: today, completed: false },
        { title: "File taxes", dueDate: later, completed: false },
        { title: "Pay electric bill", dueDate: later, completed: false }
      );
      expect(all.length).toBe(todoItemsCount + 1);
    });
    test("test for retreival of over due items", () => {
      for (var i = 0; i < all.length; i++) {
        if (all[i].dueDate == yesterday) {
          expect(all[i].dueDate).toBe(yesterday);
        }
      }
    });
    test("test for retreival of due today items", () => {
      for (var i = 0; i < all.length; i++) {
        if (all[i].dueDate == today && all[i].completed ==false) {
          expect(all[i].dueDate).toBe(today);
          expect(all[i].completed).toBe(false);
        }
      }
    });
    test("test for retreival of due tomorrow items", () => {
      for (var i = 0; i < all.length; i++) {
        if (all[i].dueDate == later) {
          expect(all[i].dueDate).toBe(later);
        }
      }
    });

    test("Should mark a todo as complete", () => {
      for (var i = 0; i < all.length; i++) {
        if (all[i].completed == false) {
          expect(all[i].completed).toBe(false);
          markAsComplete(0);
          expect(all[i].completed).toBe(true);
        }
        expect(all[i].completed).toBe(true);
      }
    });
  });
};

toDisplayableList();