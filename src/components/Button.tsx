import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from './utils';

const buttonVariants = cva(
    cn(
        // Base styles for all buttons
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium",
        "bg-black text-white border-4 border-black",
        "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        "transition-all duration-200",
        // Mobile touch effects
        "active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        "active:translate-y-[2px]",
        "active:translate-x-[2px]",
        "active:bg-white",
        "active:text-black",
        // Desktop hover effects
        "md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
        "md:hover:translate-y-[2px]",
        "md:hover:translate-x-[2px]",
        "md:hover:bg-white",
        "md:hover:text-black",
        // Utility classes
        "disabled:pointer-events-none disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        "shrink-0 [&_svg]:shrink-0",
        "outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    ),
    {
        variants: {
            variant: {
                default: "",  // Uses base styles
                destructive: cn(
                    "bg-destructive border-destructive text-white",
                    "shadow-[4px_4px_0px_0px_rgb(239,68,68)]",
                    "active:shadow-[2px_2px_0px_0px_rgb(239,68,68)]",
                    "active:bg-white active:text-destructive",
                    "md:hover:shadow-[2px_2px_0px_0px_rgb(239,68,68)]",
                    "md:hover:bg-white md:hover:text-destructive"
                ),
                outline: cn(
                    "bg-white text-black",
                    "active:over:bg-accent active:hover:text-accent-foreground",
                    "md:hover:over:bg-accent md:hover:hover:text-accent-foreground"
                ),
                secondary: cn(
                    "bg-secondary border-secondary text-secondary-foreground",
                    "shadow-[4px_4px_0px_0px_rgb(var(--secondary))]",
                    "active:shadow-[2px_2px_0px_0px_rgb(var(--secondary))]",
                    "active:bg-white active:text-secondary",
                    "md:hover:shadow-[2px_2px_0px_0px_rgb(var(--secondary))]",
                    "md:hover:bg-white md:hover:text-secondary"
                ),
                ghost: cn(
                    "bg-transparent border-transparent shadow-none",
                    "active:bg-accent",
                    "md:hover:bg-accent"
                ),
                link: cn(
                    "bg-transparent border-transparent shadow-none",
                    "underline-offset-4 active:underline",
                    "md:hover:underline"
                )
            },
            size: {
                default: 'h-9 px-4 py-2 has-[>svg]:px-3',
                sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
                lg: 'h-10 px-6 has-[>svg]:px-4',
                icon: 'size-9'
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Button, buttonVariants };
