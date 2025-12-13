import appleGolden from "../images/items/apple_golden.png";
import beefCooked from "../images/items/beef_cooked.png";
import bow from "../images/items/bow.png";
import bucketEmpty from "../images/items/bucket_empty.png";
import bucketLava from "../images/items/bucket_lava.png";
import bucketWater from "../images/items/bucket_water.png";
import diamondAxe from "../images/items/diamond_axe.png";
import diamondPickaxe from "../images/items/diamond_pickaxe.png";
import diamondShovel from "../images/items/diamond_shovel.png";
import diamondSword from "../images/items/diamond_sword.png";
import enderPearl from "../images/items/ender_pearl.png";
import fishingRod from "../images/items/fishing_rod.png";
import invCobblestone from "../images/items/inv_cobblestone.png";
import invOakPlank from "../images/items/inv_oak_plank.png";
import stoneAxe from "../images/items/stone_axe.png";
import stonePickaxe from "../images/items/stone_pickaxe.png";
import stoneShovel from "../images/items/stone_shovel.png";
import stoneSword from "../images/items/stone_sword.png";

type ItemId =
  | "GOLDEN_APPLE"
  | "COOKED_BEEF"
  | "BOW"
  | "BUCKET"
  | "LAVA_BUCKET"
  | "WATER_BUCKET"
  | "DIAMOND_AXE"
  | "DIAMOND_PICKAXE"
  | "DIAMOND_SHOVEL"
  | "DIAMOND_SWORD"
  | "ENDER_PEARL"
  | "FISHING_ROD"
  | "COBBLESTONE"
  | "WOOD"
  | "STONE_AXE"
  | "STONE_PICKAXE"
  | "STONE_SHOVEL"
  | "STONE_SWORD";

const ITEM_ICONS: Record<ItemId, string> = {
  GOLDEN_APPLE: appleGolden,
  COOKED_BEEF: beefCooked,
  BOW: bow,
  BUCKET: bucketEmpty,
  LAVA_BUCKET: bucketLava,
  WATER_BUCKET: bucketWater,
  DIAMOND_AXE: diamondAxe,
  DIAMOND_PICKAXE: diamondPickaxe,
  DIAMOND_SHOVEL: diamondShovel,
  DIAMOND_SWORD: diamondSword,
  ENDER_PEARL: enderPearl,
  FISHING_ROD: fishingRod,
  COBBLESTONE: invCobblestone,
  WOOD: invOakPlank,
  STONE_AXE: stoneAxe,
  STONE_PICKAXE: stonePickaxe,
  STONE_SHOVEL: stoneShovel,
  STONE_SWORD: stoneSword,
};

export function getItemIconUrl(id: string): string | undefined {
  const itemId = id as ItemId;
  return ITEM_ICONS[itemId];
}
