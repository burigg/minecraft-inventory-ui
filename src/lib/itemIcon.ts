type ItemId = "GOLDEN_APPLE"
| "COOKED_BEEF"
| "BOW"
| "BUCKET"
| "LAVA_BUCKET"
| "WATER_BUCKET"
| "DIAMOND_AXE"
| "DIAMOND_PICKAXE"
| "DIAMOND_SHOVEL"
| "DIAMOND_SWORD"
| "FISHING_ROD"
| "COBBLESTONE"
| "WOOD"
| "STONE_AXE"
| "STONE_PICKAXE"
| "STONE_SHOVEL"
| "STONE_SWORD"

const icons = import.meta.glob("../images/items/*.png", { eager: true , as: "url"}) as Record<string, string>;

const ITEM_FILE: Record<ItemId, string> = {
  GOLDEN_APPLE: "apple_golden.png",
  COOKED_BEEF: "beef_cooked.png",
  BOW: "bow.png",
  BUCKET: "bucket_empty.png",
  LAVA_BUCKET: "bucket_lava.png",
  WATER_BUCKET: "bucket_water.png",
  DIAMOND_AXE: "diamond_axe.png",
  DIAMOND_PICKAXE: "diamond_pickaxe.png",
  DIAMOND_SHOVEL: "diamond_shovel.png",
  DIAMOND_SWORD: "diamond_sword.png",
  FISHING_ROD: "fishing_rod.png",
  COBBLESTONE: "inv_cobblestone.png",
  WOOD: "inv_oak_plank.png",
  STONE_AXE: "stone_axe.png",
  STONE_PICKAXE: "stone_pickaxe.png",
  STONE_SHOVEL: "stone_shovel.png",
  STONE_SWORD: "stone_sword.png",
};

export function getItemIconUrl(id: string): string | undefined {
  const itemId = id as ItemId;
  const fileName = ITEM_FILE[itemId];
  if (!fileName) return undefined;
  return icons[`../images/items/${fileName}`];
}
