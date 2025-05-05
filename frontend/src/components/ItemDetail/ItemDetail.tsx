import { JSX, FC, useState, useEffect, useCallback } from 'react';
import NumberUtils from '../../utils/numberUtils';
import { Condition, ItemDetail as ItemModel } from '../../models/Search.model';
import SearchService from '../../services/Search.service';
import './ItemDetail.scss';
import Button from '../Button/Button';
import { useAppSelector } from '../../redux/hooks';
import { useParams } from 'react-router';

const ItemDetail: FC = (): JSX.Element => {
  const params = useParams();
  const itemId = useAppSelector((state) => state.search.selectedItemId);

  const [itemData, setItemData] = useState<ItemModel | null>(null);

  const getItemInformation = useCallback(async (id: string) => {
    try {
      const response = await SearchService.getItemById(id);

      setItemData(response);
    } catch {
      console.error('Error retrieving item data');
    }
  }, []);

  useEffect(() => {
    if (params && params.id && params.id !== itemId) {
      const id = params.id as string;
      setItemData(null);
      getItemInformation(id);
    }
  }, [params]);

  useEffect(() => {
    if (itemId) {
      getItemInformation(itemId);
    }
  }, []);

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
