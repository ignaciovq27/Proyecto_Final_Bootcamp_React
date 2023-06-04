import "../UserDashboardEdit/UserDashboardEdit.css";
import { useContext } from "react";
import { ContextUser } from "../../context/UserContext";
import { ContextProduct } from "../../context/ProductContext";
import { useParams } from "react-router-dom";

import AppTitle from "../../components/AppTitle/AppTitle";
import AppUserDashboardEdit from "../../components/AppUserDashboardEdit/AppUserDashboardEdit";

export default function UserDashboardEdit() {
  const { products } = useContext(ContextProduct);
  const { user } = useContext(ContextUser);
  const params = useParams();

  const productFound = products.filter((product) => product.userId === user.userId).length === 0;
  // console.log(params.id);

  return (
    <div className="userDashboardEdit-container" id="userDashboardEdit">
      {productFound || params.id === undefined ? [
        <AppTitle key="new" title="USER DASHBOARD CREATE" />,
        <AppUserDashboardEdit
          key="newTitle"
          dashboardTitle="✧ CREAR PUBLICACIÓN ✧"
          dashboardSubtitle="REGISTRA LOS DATOS DE LA PUBLICACIÓN: "
          confirmButtonText="CREAR"
        />
      ] : null}

      {products
        .filter((product) => product.userId === user.userId)
        .map((product) =>
          product.id === parseInt(params.id) ? [
            <AppTitle key={product.id} title={`USER DASHBOARD EDIT - PRODUCT: ${product.id}`} />,
            <AppUserDashboardEdit
              editingState="true"
              key={`editTitle-${product.id}`}
              dashboardTitle="✧ EDITAR PUBLICACIÓN ✧"
              dashboardSubtitle="ACTUALIZA LOS DATOS DE LA PUBLICACIÓN: "
              confirmButtonText="ACTUALIZAR"
            />
          ] : null
        )}
    </div>
  );
}
