"use client";
import { builder, Builder, withChildren } from "@builder.io/react";
import { Card, CardContent } from "./components/ui/card";
import { ToolCard } from "./components/ToolCard";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(withChildren(Card), {
  name: "Card",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
  ],
});

Builder.registerComponent(withChildren(CardContent), {
  name: "CardContent",
  inputs: [
    {
      name: "children",
      type: "string",
      hideFromUI: true,
      meta: {
        ts: "ReactNode",
      },
    },
  ],
});

Builder.registerComponent(ToolCard, {
  name: "ToolCard",
  inputs: [
    {
      name: "category",
      type: "string",
      required: true,
    },
    {
      name: "description",
      type: "string",
      required: true,
    },
    {
      name: "name",
      type: "string",
      required: true,
    },
    {
      name: "url",
      type: "string",
      required: true,
    },
  ],
});
