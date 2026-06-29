import { categoryOptions } from "@/data";

export default function categoryIcons(categoryValue) {
    const category = categoryOptions.find((category) => category.value === categoryValue);
    return category?.icon;
}