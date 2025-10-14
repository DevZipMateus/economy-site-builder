import { useState } from "react";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const Catalogo = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const { addItem } = useCart();
  const { toast } = useToast();

  const products = [
    "cartucho_de_tinta_compativel_com_hp_122xl_colorido_preto_13ml_12ml.jpg",
    "cartucho_de_tinta_compativel_com_hp_667xl_colorido_preto_12ml_14ml.jpg",
    "cartucho_de_tinta_hp_122_preto_colorido_original_2ml.jpg",
    "cartucho_de_tinta_hp_664_preto_colorido_original_2ml.jpg",
    "cartucho_de_tinta_hp_667_preto_colorido_original_2ml.jpg",
    "tinta_compativel_com_epson_t664_preto_ciano_amarelo_magenta_kora_100ml.jpg",
    "tinta_epson_t504_amarelo_original_70ml.jpg",
    "tinta_epson_t504_ciano_original_70ml.jpg",
    "tinta_epson_t504_magenta_original_70ml.jpg",
    "tinta_epson_t504_preto_original_127ml.jpg",
    "tinta_epson_t544_amarelo_original_65ml.jpg",
    "tinta_epson_t544_ciano_original_65ml.jpg",
    "tinta_epson_t544_magenta_original_65ml.jpg",
    "tinta_epson_t544_preto_original_65ml.jpg",
    "tinta_epson_t574_amarelo_original_70ml.jpg",
    "tinta_epson_t574_ciano_claro_original_70ml.jpg",
    "tinta_epson_t574_ciano_original_70ml.jpg",
    "tinta_epson_t574_magenta_claro_original_70ml.jpg",
    "tinta_epson_t574_magenta_original_70ml.jpg",
    "tinta_epson_t574_preto_original_70ml.jpg",
    "tinta_epson_t664_amarelo_original_70ml.jpg",
    "tinta_epson_t664_ciano_original_70ml.jpg",
    "tinta_epson_t664_magenta_original_70ml.jpg",
    "tinta_epson_t664_preto_original_70ml.jpg",
    "tinta_hp_gt52_amarelo_gt5822_ink_tank_416_smart_tank_517_532_617_original_70ml.jpg",
    "tinta_hp_gt52_ciano_gt5822_ink_tank_416_smart_tank_517_532_617_original_70ml.jpg",
    "tinta_hp_gt52_magenta_gt5822_ink_tank_416_smart_tank_517_532_617_original_70ml.jpg",
    "tinta_hp_gt53_preto_smart_tank_517_532_617_deskjet_gt_5822_416_116_original_90ml.jpg",
    "toner_compativel_com_brother_tn1060_1k_dcp1602_dcp1512_dcp1617nw_hl1112_hl1202_hl1212w_.jpg",
    "toner_compativel_com_brother_tn3472_12k_dcp_l5652dn_dcp_l5502dn_mfc_l6702dw_.jpg",
    "toner_compativel_com_brother_tn3492_tn890_20k_mfc_l6902dw_hl_l6402dw_mfcl_6902_hll_6402_.jpg",
    "toner_compativel_com_brother_tn750_8k_dcp8110dn_hl_5450dw_hl_5470dw_mfc_8510dn_.jpg",
    "toner_compativel_com_brother_tn_219bk_preto_1.5k | hl-l3240 dcp-l3560 mfc-l3760 .jpg",
    "toner_compativel_com_hp_103a_w1103a_2.5k | 1000a 1200a .jpg",
    "toner_compativel_com_hp_cb435a_cb436a_ce285a_universal_1.8k | p1005 p1505 m1120 m1212 m1130 .jpg",
    "toner_compativel_com_hp_ce278a_2k_p1566_p1606_m1530_m1536_.jpg",
    "toner_compativel_com_hp_ce505a_2.3k | p2035 p2055 .jpg",
    "toner_compativel_com_hp_cf217a_1.6k | m130 m102  .jpg",
    "toner_compativel_com_hp_cf226x_9k_m426_m402_.jpg",
    "toner_compativel_com_hp_w1030a_preto_3k_4003n_4103_4104_com_chip_.jpg",
    "toner_compativel_com_lexmark_604h_60fbh00_10k_mx511_mx410_mx310_mx611_.jpg",
    "toner_compativel_com_lexmark_ms310_ms610_ms410_ms312_ms315_5k_50f4h00_.jpg",
    "toner_compativel_com_samsung_clt_c504s_azul_1.8k | clp415nw clx4195fn sl-c1810w .jpg",
    "toner_compativel_com_samsung_clt_k504s_preto_2.5k | clp415nw clx4195fn sl-c1810w .jpg",
    "toner_compativel_com_samsung_clt_m504s_magenta_1.8k | clp415nw clx4195fn sl-c1810w .jpg",
    "toner_compativel_com_samsung_clt_y504s_amarelo_1.8k | clp415nw clx4195fn sl-c1810w .jpg",
    "toner_compativel_com_samsung_mlt_d101s_1.5k | ml2160 ml2161 ml2165 scx3400 scx3401 .jpg",
    "toner_compativel_com_samsung_mlt_d103l_5k_ml2950_ml2955_scx4705_scx4727_scx4728_scx4729_.jpg",
    "toner_compativel_com_samsung_mlt_d111s_d111s_1k_m2020_m2070_.jpg",
    "toner_compativel_com_samsung_mlt_d116l_d116_3k_sl_m2885fw_m2835dw_m2825nd_m2875fd.jpg",
    "toner_compativel_com_samsung_mlt_d205_mlt_d205e_10k_ml3310_ml3710_scx5637_ml3712_scx4833_.jpg",
    "toner_hp_w1030x_w1510x_preto_9.7k | 4003  4103 4004  4104 com chip.jpg",
  ];

  const formatProductName = (filename: string) => {
    return filename
      .replace(/\.(jpg|png|jpeg)$/i, "")
      .replace(/_/g, " ")
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getQuantity = (productId: string) => quantities[productId] || 1;

  const updateQuantity = (productId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[productId] || 1;
      const newValue = Math.max(1, current + delta);
      return { ...prev, [productId]: newValue };
    });
  };

  const handleAddToCart = (product: string) => {
    const productName = formatProductName(product);
    const quantity = getQuantity(product);
    
    addItem(
      {
        id: product,
        name: productName,
        image: `/galeria/${product}`,
      },
      quantity
    );

    toast({
      title: "Produto adicionado!",
      description: `${quantity}x ${productName}`,
    });

    setQuantities((prev) => ({ ...prev, [product]: 1 }));
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Catálogo de produtos
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Confira nossa linha completa de cartuchos, toners e tintas para impressoras
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div 
                    className="aspect-square overflow-hidden bg-muted cursor-pointer group"
                    onClick={() => setSelectedImage(`/galeria/${product}`)}
                  >
                    <img
                      src={`/galeria/${product}`}
                      alt={formatProductName(product)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <h3 className="text-sm font-medium text-foreground line-clamp-2 min-h-[2.5rem]">
                      {formatProductName(product)}
                    </h3>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-9 w-9"
                        onClick={() => updateQuantity(product, -1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">
                        {getQuantity(product)}
                      </span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-9 w-9"
                        onClick={() => updateQuantity(product, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <Button
                      className="w-full"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Adicionar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Cart />

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Produto"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Catalogo;
