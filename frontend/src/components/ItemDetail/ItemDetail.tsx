import { JSX, FC, useState, useEffect } from 'react';
import NumberUtils from '../../utils/numberUtils';
import { Condition, ItemDetail as ItemModel } from '../../models/Search.model';
import SearchService from '../../services/Search.service';
import { useNavigate } from 'react-router-dom';
import './ItemDetail.scss';
import Button from '../Button/Button';

interface ItemDetailsProps {
  id: string;
}

const ItemDetail: FC<ItemDetailsProps> = ({ id }): JSX.Element => {
  const navigate = useNavigate();

  const [itemData, setItemData] = useState<ItemModel | null>(null);

  const getItemInformation = async (id: string) => {
    try {
      const response = await SearchService.getItemById(id);

      if (!response) {
        console.error('No data found');
        return;
      }

      setItemData(response);

      // Navigate to the item page route
      navigate(`/productos/${id}`, { replace: true });
    } catch {
      console.error('Error retrieving item data');
    }
  };

  useEffect(() => {
    if (id) {
      (async () => await getItemInformation(id))();
    }
  }, [id]);

  return (
    <>
      <div className="item-detail">
        <section className="item-detail__main">
          <img src={itemData?.image} alt={itemData?.title} />
          <div className="item-detail__description">
            <h2>Descripción del producto</h2>
            <p>{itemData?.description}</p>
          </div>
        </section>
        <section className="item-detail__sidebar">
          {/* Secondary information */}
          <div className="item-detail__secondary-info">
            <span>{itemData && itemData?.condition === Condition.NEW ? 'Nuevo' : 'Usado'}</span>
            <span>|</span>
            <span>{itemData?.sold_quantity} vendidos</span>
          </div>

          {/* Main information section */}
          <div className="item-detail__main-info">
            <h2>{itemData?.title}</h2>
            <div className="item-detail__price">
              {itemData && NumberUtils.getCurrency(itemData?.price, itemData?.currency)}
            </div>
            <Button
              label="Comprar"
              variant="primary"
              onClick={() => {
                // Handle button click
                console.log('Comprar button clicked');
              }}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default ItemDetail;
