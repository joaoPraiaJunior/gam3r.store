import { ProvedorCarrinho } from "@/src/data/contexts/ContextoCarrinho";
import { ProvedorPagamento } from "@/src/data/contexts/ContextoPagamento";
import { ProvedorProdutos } from "@/src/data/contexts/ContextoProdutos";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "../tabs";
import Pagamento from "./Pagamento";
import ProdutoDetalhes from "./ProdutoDetalhes";
import UltimasCompras from "./UltimasCompras";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ProvedorProdutos>
      <ProvedorCarrinho>
        <ProvedorPagamento>
          <NavigationContainer theme={DarkTheme}>
            <Stack.Navigator initialRouteName="Tabs">
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ProdutoDetalhes"
                component={ProdutoDetalhes}
                options={{
                  title: "Detalhes do Produto",
                  headerBackTitle: "Voltar",
                  headerShown: true,
                  headerStyle: { backgroundColor: "#0D001E" },
                  headerTintColor: "#FFF",
                }}
              />
              <Stack.Screen
                name="Pagamento"
                component={Pagamento}
                options={{
                  title: "Detalhes do Pagamento",
                  headerBackTitle: "Voltar",
                  headerShown: true,
                  headerStyle: { backgroundColor: "#0D001E" },
                  headerTintColor: "#FFF",
                }}
              />
              <Stack.Screen
                name="UltimasCompras"
                component={UltimasCompras}
                options={{
                  title: "Últimas Compras",
                  headerBackTitle: "Voltar",
                  headerShown: true,
                  headerStyle: { backgroundColor: "#0D001E" },
                  headerTintColor: "#FFF",
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </ProvedorPagamento>
      </ProvedorCarrinho>
    </ProvedorProdutos>
  );
}
