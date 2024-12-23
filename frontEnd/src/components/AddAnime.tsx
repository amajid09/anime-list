/* eslint-disable react-hooks/rules-of-hooks */
import React, { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { FormItem, FormLabel } from "@/components/ui/form";
import { useAnime } from "@/hooks/anime-provider";
import { useNavigate } from "react-router";
import { Input } from "./ui/input";

export default function AddAnime() {
  const { addAnime } = useAnime();
  const navigateTo = useNavigate();

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const form = new FormData(event.target);
    const title = form.get("title") ?? "";
    const description = form.get("description") ?? "";
    const image = form.get("image") ?? "";
    const formData = new FormData();
    formData.append("description", description);
    formData.append("title", title);
    formData.append("image", image);
    console.log(image);
    await addAnime(formData);
    navigateTo("/anime");
  }
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="flex justify-center items-center h-full pt-20">
        <form onSubmit={onSubmit} method="post" className="space-y-8">
          <FormItem>
            <FormLabel>Anime name</FormLabel>
            <Input type={"text"} name="title" placeholder="title" required />
          </FormItem>
          <FormItem>
            <FormLabel>Description</FormLabel>
            <textarea
              name="description"
              placeholder="description"
              required
              className="flex h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
          </FormItem>
          <FormItem>
            <FormLabel>Image</FormLabel>
            <Input type={"file"} placeholder="image" name="image" required />
          </FormItem>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}
