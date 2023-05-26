"use client";

import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Draggable from "../components/Draggable";
import Droppable from "../components/Droppable";

export default function DragAndDrop() {
  const animals = [
    { animal: "🐶", name: "Perro" },
    { animal: "🐱", name: "Gato" },
    { animal: "🐭", name: "Ratón" },
    { animal: "🐹", name: "Hamster" },
    { animal: "🐰", name: "Conejo" },
    { animal: "🦊", name: "Zorro" },
    { animal: "🐻", name: "Oso" },
    { animal: "🐼", name: "Panda" },
  ];

  /*const [ isDropped, setIsDropped ] = useState(false);

  const draggableMarkup = (
    <Draggable>Arrastrame</Draggable>
  );*/ 

  return (
    <div className="Card">
      <div>
        {" "}
        <p className="display-6">Drag and Drop (Arrastrar y soltar)</p>{" "}
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col">
          {animals.map((animal) => (
          <DndContext>
            <Draggable key={animal.name}>
              {animal.animal}
              {animal.name}
            </Draggable>
          </DndContext> 
        ))}
        </div>
        <div className="col">
        <Droppable>
            { 'Drop here!' }
        </Droppable>
        </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}
