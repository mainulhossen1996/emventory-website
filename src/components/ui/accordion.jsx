"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

function Accordion({ ...props }) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("mb-6 rounded-md bg-white shadow-md focus-within:ring-2 focus-within:ring-blue-300 focus-within:shadow-lg transition-all", className)}
      {...props}
    />
  )
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex w-full">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 items-center justify-between gap-4 px-4 py-4 text-left text-base font-medium outline-none",
          "transition-all rounded-md",
          "disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        <span>{children}</span>

        {/* Icon background changes when open */}
        <div
          className={cn(
            "flex items-center justify-center rounded-full w-7 h-7 shadow-md transition-colors duration-200",
            "bg-white group-data-[state=open]:bg-blue-500"
          )}
        >
          <ChevronDownIcon
            className="h-4 w-4 text-blue-500 pointer-events-none transition-transform duration-200 group-data-[state=open]:rotate-180  group-data-[state=open]:text-white"
          />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}


function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("px-4 pb-4 pt-0 text-gray-700", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
