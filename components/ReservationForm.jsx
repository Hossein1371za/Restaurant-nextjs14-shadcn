import React,{useState} from "react"
import { format } from "date-fns"
import {Calendar as CalendarIcon}from "lucide-react"
import {cn} from "@/lib/utils"
import { Button } from "./ui/button"
import { Calendar } from "./ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"




const ReservationForm = () => {
    const [date,setDate]= useState()
  return (
    <form className="flex flex-col gap-y-10">
        <div className="grid gap-[30px]">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                <div>
                    <Label html-for="firstname">نام</Label>
                    <Input type="text" id="firstname"/>
                </div>
                <div>
                    <Label html-for="lastname">نام خانوادگی</Label>
                    <Input type="text" id="lastname"/>
                </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                <div>
                    <Label>تاریخ</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button 
                            variant={"input"}
                            className={cn("w-full justify-end text-left font-normal")}
                            >
                                <CalendarIcon className="ml-2 h-4 w-4"/>
                                {date ? format(date,"PPP") : <span>تایین تاریخ</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocuse
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <div>
                    <Label>نفرات</Label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="تعداد نفرات"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>شخص</SelectLabel>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4</SelectItem>
                                <SelectItem value="5">5</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>
        <Button className="w-full ">رزرو</Button>
    </form>
  )
}

export default ReservationForm