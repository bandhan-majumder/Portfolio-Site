"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@repo/ui";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@repo/ui";
import { Input } from "@repo/ui";
import { useEffect } from "react";
import { IBlogDetails } from "../../types";
import toast from "react-hot-toast";

const createFormSchema = () => {
  return z.object({
    title: z.string().min(8, {
      message: "Title must be at least 8 characters long.",
    }),
    description: z.string().min(1, {
      message: "Description is required.",
    }),
    notionDocsId: z.string().min(1, {
      message: "Notion Doc ID is required."
    }),
    imageURL: z.string().optional(),
  });
};

const updateFormSchema = () => {
  return z.object({
    notionDocsId: z.string().min(1, {
      message: "Notion Doc ID is required."
    }),
    title: z.string().optional().or(
      z.string().min(8, {
        message: "If provided, title must be at least 8 characters long.",
      })
    ),
    description: z.string().optional().or(
      z.string().min(1, {
        message: "If provided, description cannot be empty.",
      })
    ),
    imageURL: z.string().optional(),
  });
};

const deleteFormSchema = () => {
  return z.object({
    notionDocsId: z.string().min(1, {
      message: "Notion Doc ID is required."
    }),
  });
};

interface PageFormProps {
  mode: "add" | "edit" | "delete";
  initialData?: IBlogDetails | null;
  className?: string;
}

export function PageForm({
  mode = "add",
  initialData,
  className = "text-white max-w-[30vw] p-10 rounded-3xl"
}: PageFormProps) {
  const isEditing = mode === "edit";
  const isDeleting = mode === "delete";

  const getFormSchema = () => {
    if (isDeleting) return deleteFormSchema();
    if (isEditing) return updateFormSchema();
    return createFormSchema();
  };

  const formSchema = getFormSchema();

  // Initialize form with validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      //@ts-ignore
      title: "",
      description: "",
      notionDocsId: "",
      imageURL: "",
    },
  });

  // Update form values when in edit mode and initialData is provided
  useEffect(() => {
    if (isEditing && initialData) {
      form.reset({
        //@ts-ignore
        title: initialData.title || "",
        description: initialData.description || "",
        notionDocsId: initialData.notionDocsId,
        imageURL: initialData.imageURL || "",
      });
    }
  }, [form, isEditing, initialData]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (mode === "add") {
      const res = fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      res.then((response) => {
        if (response.ok) {
          toast.success("Blog created successfully");
        } else {
          toast.error("Failed to create blog");
        }
      }).catch((error) => {
        toast.error("Error creating blog:", error);
      });
    }

    if (mode === "edit") {
      // Only include fields that were actually provided in the edit mode
      const payload = {
        notionDocsId: values.notionDocsId,
        //@ts-ignore
        ...(values.title && { title: values.title }),
        //@ts-ignore  
        ...(values.description && { description: values.description }),
        //@ts-ignore
        ...(values.imageURL && { imageURL: values.imageURL }),
      };

      const res = fetch("/api/blog", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      res.then((response) => {
        if (response.ok) {
          toast.success("Blog updated successfully");
        } else {
          toast.error("Failed to update blog");
        }
      }).catch((error) => {
        toast.error("Error updating blog:", error);
      });
    }

    if (mode === "delete") {
      const res = fetch("/api/blog", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notionDocsId: values.notionDocsId }),
      });
      res.then((response) => {
        if (response.ok) {
          toast.success("Blog deleted successfully");
          form.reset(); // Clear the form after successful deletion
        } else {
          toast.error("Failed to delete blog");
        }
      }).catch((error) => {
        toast.error("Error deleting blog:", error);
      });
    }
  }

  return (
    <div className={className}>
      <Form {...form}>
        <form onSubmit={
          //@ts-ignore
          form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            //@ts-ignore
            control={form.control}
            name="notionDocsId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Notion Doc ID</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Notion Doc ID" {...field} className="text-gray-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {!isDeleting && (
            <>
              <FormField
                //@ts-ignore
                control={form.control}
                //@ts-ignore
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{isEditing ? "Title (optional)" : "Title"}</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter title" {...field} className="text-gray-600" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                //@ts-ignore
                control={form.control}
                //@ts-ignore
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{isEditing ? "Description (optional)" : "Description"}</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter description" {...field} className="text-gray-600" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                //@ts-ignore
                control={form.control}
                //@ts-ignore
                name="imageURL"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Thumbnail Image URL (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter image URL" {...field} className="text-gray-600" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <Button
            type="submit"
            className={`${isDeleting ? 'bg-red-600 hover:bg-red-700' : 'bg-white'} ${isDeleting ? 'text-white' : 'text-black'}`}
          >
            {isDeleting ? "Delete" : isEditing ? "Update" : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
}