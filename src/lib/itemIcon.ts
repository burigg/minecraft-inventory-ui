type ItemId = "APPLE_GOLDEN"
| "COOKED_BEEF"
| "BOW"
| "BUCKET"
| "LAVA_BUCKET"
| "WATER_BUCKET"

const icons = import.meta.glob("../images/items/*.png", { eager: true , as: "url"}) as Record<string, string>;

const ITEM_FILE: Record<ItemId, string> = {
  APPLE_GOLDEN: "apple_golden.png",
  COOKED_BEEF: "beef_cooked.png",
  BOW: "bow.png",
  BUCKET: "bucket_empty.png",
  LAVA_BUCKET: "bucket_lava.png",
  WATER_BUCKET: "bucket_water.png",
};

export function getItemIconUrl(id: string): string | undefined {
  const itemId = id as ItemId;
  const fileName = ITEM_FILE[itemId];
  if (!fileName) return undefined;
  return icons[`../images/items/${fileName}`];
}
