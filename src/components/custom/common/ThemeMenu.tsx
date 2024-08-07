import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeMenu({ props }) {
  console.log(props);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Change Theme</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => {
            props.setTheme("system");
          }}
        >
          System
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            props.setTheme("light");
          }}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            props.setTheme("dark");
          }}
        >
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
