import type { RowDataPacket } from "mysql2";

export interface User extends RowDataPacket {
  id: number; // 用户 ID
  tid: string; // 用户 Telegram ID
  username: string; // 用户名
}

export interface Shop extends RowDataPacket {
  id: number; // 商铺 ID
  name: string; // 商铺名称
}

export interface Category extends RowDataPacket {
  id: number; // 分类 ID
  name: string; // 分类名称
}

export interface Product extends RowDataPacket {
  id: number; // 商品 ID
  name: string; // 商品名称
  category_id: number; // 分类 ID
  price: number; // 价格
}

export interface ProductSpec extends RowDataPacket {
  id: number; // 商品规格 ID
  name: string; // 规格名称
}

export interface ProductSpecValue extends RowDataPacket {
  id: number; // 商品规格值 ID
  spec_id: number; // 规格 ID
  value: string; // 规格值
}

export interface ProductSKU extends RowDataPacket {
  id: number; // 商品 SKU ID
  product_id: number; // 商品 ID
  sku_code: string; // SKU 编码
  price: number; // 价格
  stock: number; // 库存
}

export interface ProductSKUValue extends RowDataPacket {
  id: number; // 商品 SKU 规格值 ID
  sku_id: number; // SKU ID
  spec_id: number; // 规格 ID
}

export interface Cart extends RowDataPacket {
  id: number; // 购物车 ID
  user_id: number; // 用户 ID
}

export interface CartItem extends RowDataPacket {
  id: number; // 购物车详情 ID
  cart_id: number; // 购物车 ID
  sku_id: number; // SKU ID
  quantity: number; // 数量
}

export interface Order extends RowDataPacket {
  id: string; // 订单 ID
  user_id: number; // 用户 ID
  cart_id: number; // 购物车 ID
  total: number; // 总价
  status: number; // 订单状态
  payment_id: number; // 支付 ID
  payment_status: number; // 支付状态
  created_at: Date; // 创建时间
  updated_at: Date; // 更新时间
}

