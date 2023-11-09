import React from "react";
import {Select, SelectItem, Avatar} from "@nextui-org/react";


const modules = [
    {
      id: 1,
      name: "anime",
      description: "anime style art",
      avatar: "https://firebasestorage.googleapis.com/v0/b/alamiphotography-b75a1.appspot.com/o/files%2Fimg-skXmzG8SOpZ2pyZl4Kxl5RRi.png?alt=media&token=aa1531bb-9bb2-42bd-84ef-4ef04abf96bc",
    },
    {
      id: 2,
      name: "portrait",
      description: "realistic portrait generation",
      avatar: "https://cdna.artstation.com/p/assets/images/images/036/669/060/large/coisini-serein-d54b78aabf789d9b1266b2abe485-hires.jpg?1618307581",
    },
    {
      id: 3,
      name: "landscape",
      description: "beautiful landscape scenes",
      avatar: "https://th.bing.com/th/id/OIP.FNRjBWnArIECXfdnWvNrWAHaEK?pid=ImgDet&rs=1",
    },
    {
      id: 4,
      name: "cartoon",
      description: "cartoon-style illustrations",
      avatar: "https://th.bing.com/th/id/R.07236489f54f5a6f91ede61a5b805da6?rik=m7AJs7zCdXB2Bg&pid=ImgRaw&r=0",
    },
    {
      id: 5,
      name: "fantasy",
      description: "fantasy world creations",
      avatar: "https://images.nightcafe.studio/jobs/dwCf9XA0o0lfCTDQUthb/dwCf9XA0o0lfCTDQUthb--1--lcot9_6x.jpg?tr=w-1200",
    },
    // Add more modules as needed
  ];

export default function ModuleSelect() {
    const [module, setModule] = React.useState(0);
  return (
    <Select
      items={modules}
      className="max-w-xs"
      variant="bordered"
      placeholder="Select a module"
      classNames={{
        label: "group-data-[filled=true]:-translate-y-5",
        trigger: "min-h-unit-16",
        listboxWrapper: "max-h-[400px]",
      }}
      listboxProps={{
        itemClasses: {
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        },
      }}
      popoverProps={{
        classNames: {
          base: "before:bg-default-200",
          content: "p-0 border-small border-divider bg-background",
        },
      }}
      renderValue={(items) => {
        return items.map((item) => (
          <div key={item.key} className="flex items-center gap-2">
            <Avatar
              alt={item.data?.name}
              className="flex-shrink-0"
              size="sm"
              src={item.data?.avatar}
            />
            <div className="flex flex-col">
              <span>{item.data?.name}</span>
              <span className="text-default-500 text-tiny">({item.data?.description})</span>
            </div>
          </div>
        ));
      }}
    >
      {(user) => (
        <SelectItem key={user.id} textValue={user.name}>
          <div className="flex gap-2 items-center">
            <Avatar alt={user.name} className="flex-shrink-0" size="sm" src={user.avatar} />
            <div className="flex flex-col">
              <span className="text-small">{user.name}</span>
              <span className="text-tiny text-default-400">{user.description}</span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
}
