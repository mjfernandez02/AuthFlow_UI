import { Cherry, CoinGreen, Maple } from "../components/Logos";
import {
  FeedAction,
  FeedDescription,
  FeedIcon,
  FeedItem,
  FeedTitle,
  PetMessage,
  PetMessageIcon,
  PetName,
  PetPage,
  PetPanel,
  PetStatus,
  PetStatusIcon,
  PetTitle,
} from "../styles/MyPet.styles";
import { PetArtwork } from "../styles/Onboarding.styles";

const MyPet = () => (
  <PetPage>
    <PetPanel>
      <PetArtwork>
        <Maple />
      </PetArtwork>
      <PetTitle>
        <PetName>Maple the Fox</PetName>
        <PetStatus>
          Feeling hungry!
          <PetStatusIcon>
            <Cherry alt="" />
          </PetStatusIcon>
        </PetStatus>
      </PetTitle>

      <FeedItem>
        <FeedIcon>
          <Cherry alt="" />
        </FeedIcon>
        <div>
          <FeedTitle>Tasty Wild Berries</FeedTitle>
          <FeedDescription>
            Feed Maple to make her happy and warm!
          </FeedDescription>
        </div>
        <FeedAction type="button">
          Feed — 10 coins
          <CoinGreen alt="" />
        </FeedAction>
      </FeedItem>

      <PetMessage>
        <PetMessageIcon>
          <Cherry alt="" />
        </PetMessageIcon>
        <span>
          &quot;Yum! I&apos;m feeling a bit hungry today! Thank you for the
          delicious berries.&quot;
        </span>
      </PetMessage>
    </PetPanel>
  </PetPage>
);

export default MyPet;
