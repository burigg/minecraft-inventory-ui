import appleGolden from "../images/items/apple_golden.png";
import arrow from "../images/items/arrow.png";
import beefCooked from "../images/items/beef_cooked.png";
import bow from "../images/items/bow.png";
import bucketEmpty from "../images/items/bucket_empty.png";
import bucketLava from "../images/items/bucket_lava.png";
import bucketWater from "../images/items/bucket_water.png";
import carrotGolden from "../images/items/carrot_golden.png";
import diamondAxe from "../images/items/diamond_axe.png";
import diamondBoots from "../images/items/diamond_boots.png";
import diamondChestplate from "../images/items/diamond_chestplate.png";
import diamondHelmet from "../images/items/diamond_helmet.png";
import diamondLeggings from "../images/items/diamond_leggings.png";
import diamondPickaxe from "../images/items/diamond_pickaxe.png";
import diamondShovel from "../images/items/diamond_shovel.png";
import diamondSword from "../images/items/diamond_sword.png";
import enderPearl from "../images/items/ender_pearl.png";
import fishingRod from "../images/items/fishing_rod.png";
import invCobbleWall from "../images/items/inv_cobble_wall.png";
import invCobblestone from "../images/items/inv_cobblestone.png";
import invOakPlank from "../images/items/inv_oak_plank.png";
import potionBottleEmpty from "../images/items/potion_bottle_empty.png";
import potionHealing from "../images/items/potion_of_healing.png";
import potionSpeed from "../images/items/potion_of_speed.png";
import splashPotionHealing from "../images/items/splash_potion_of_healing.png";
import stoneAxe from "../images/items/stone_axe.png";
import stonePickaxe from "../images/items/stone_pickaxe.png";
import stoneShovel from "../images/items/stone_shovel.png";
import stoneSword from "../images/items/stone_sword.png";

type ItemId =
  | "ARROW"
  | "BOW"
  | "BUCKET"
  | "COBBLESTONE"
  | "COBBLESTONE_WALL"
  | "COOKED_BEEF"
  | "DIAMOND_AXE"
  | "DIAMOND_BOOTS"
  | "DIAMOND_CHESTPLATE"
  | "DIAMOND_HELMET"
  | "DIAMOND_LEGGINGS"
  | "DIAMOND_PICKAXE"
  | "DIAMOND_SHOVEL"
  | "DIAMOND_SWORD"
  | "ENDER_PEARL"
  | "FISHING_ROD"
  | "GLASS_BOTTLE"
  | "POTION"
  | "GOLDEN_APPLE"
  | "GOLDEN_CARROT"
  | "LAVA_BUCKET"
  | "STONE_AXE"
  | "STONE_PICKAXE"
  | "STONE_SHOVEL"
  | "STONE_SWORD"
  | "WATER_BUCKET"
  | "WOOD";

const ITEM_ICONS: Record<ItemId, string> = {
  ARROW: arrow,
  BOW: bow,
  BUCKET: bucketEmpty,
  COBBLESTONE: invCobblestone,
  COBBLESTONE_WALL: invCobbleWall,
  COOKED_BEEF: beefCooked,
  DIAMOND_AXE: diamondAxe,
  DIAMOND_BOOTS: diamondBoots,
  DIAMOND_CHESTPLATE: diamondChestplate,
  DIAMOND_HELMET: diamondHelmet,
  DIAMOND_LEGGINGS: diamondLeggings,
  DIAMOND_PICKAXE: diamondPickaxe,
  DIAMOND_SHOVEL: diamondShovel,
  DIAMOND_SWORD: diamondSword,
  ENDER_PEARL: enderPearl,
  FISHING_ROD: fishingRod,
  GLASS_BOTTLE: potionBottleEmpty,
  POTION: potionBottleEmpty,
  GOLDEN_APPLE: appleGolden,
  GOLDEN_CARROT: carrotGolden,
  LAVA_BUCKET: bucketLava,
  STONE_AXE: stoneAxe,
  STONE_PICKAXE: stonePickaxe,
  STONE_SHOVEL: stoneShovel,
  STONE_SWORD: stoneSword,
  WATER_BUCKET: bucketWater,
  WOOD: invOakPlank,
};

export function getItemIconUrl(id: string, damage?: number): string | undefined {
  const itemId = id as ItemId;
  if (id === "POTION" && damage == 34) {
    return potionSpeed;
  }
  if (id === "POTION" && damage == 37) {
    return potionHealing;
  }
  if (id === "POTION" && damage == 16421) {
    return splashPotionHealing;
  }
  return ITEM_ICONS[itemId];
}
