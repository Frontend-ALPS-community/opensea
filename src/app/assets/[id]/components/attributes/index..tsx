import DetailLayout from '@/@components/assets/DetailLayout';
import { CardData } from '../../page';
import BoxLayout from './attributeLayout';

interface IDetailProp {
  card: CardData;
}

const DetailProp: React.FC<IDetailProp> = ({ card }) => {
  return (
    <div className="my-4">
      <DetailLayout title="특성" arrow={true} bold={true}>
        <div className="flex flex-wrap gap-2 m-2 max-md:justify-center">
          {Object.entries(card.attributes).map(([key, value]) => (
            <BoxLayout key={key} property={key.toUpperCase()} value={value} />
          ))}
        </div>
      </DetailLayout>
    </div>
  );
};

export default DetailProp;
