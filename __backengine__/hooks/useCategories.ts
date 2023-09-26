/*
 * Code generated by Backengine
 *
 * https://backengine.dev
 */

import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import { Database } from "../types";

type Table = Database["public"]["Tables"]["categories"];
export type Row = Table["Row"];
export type InsertCategory = Table["Insert"];
export type UpdateCategory = Table["Update"];

const useCategories = () => {
  const [categories, setCategories] = useState<Row[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase.from("categories").select();
      if (error) {
        throw error;
      }
      setCategories(data || []);
    } catch (error) {
      console.error("Error fetching", error);
    }
  };

  const createCategory = async (newData: InsertCategory) => {
    const { data, error } = await supabase
      .from("categories")
      .insert([newData])
      .select();
    if (error) {
      throw error;
    }
    setCategories([...categories, data[0]]);
    return data[0];
  };

  const updateCategory = async (id: Row["id"], updatedData: UpdateCategory) => {
    const { data, error } = await supabase
      .from("categories")
      .update(updatedData)
      .eq("id", id)
      .select();
    if (error) {
      throw error;
    }
    setCategories(
      categories.map((category) =>
        category.id === id ? { ...category, ...data[0] } : category,
      ),
    );
    return data[0];
  };

  const deleteCategory = async (id: Row["id"]): Promise<number | null> => {
    const { error, count } = await supabase
      .from("categories")
      .delete({ count: "exact" })
      .eq("id", id);
    if (error) {
      throw error;
    }
    const filtered = categories.filter((category) => category.id !== id);
    setCategories(filtered);
    return count;
  };

  return {
    categories,
    fetchCategories,
    createCategory,
    updateCategory,
    deleteCategory,
  };
};

export default useCategories;