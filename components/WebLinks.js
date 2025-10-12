import Image from "next/image";
import styled from "styled-components";
import { Container } from "./ReusableStyles";
import { useDarkMode } from "usehooks-ts";
import allLinks from "../data/LinksData";
import bioData from "../data/BioData";
import { HexIcon, OvalIcon } from "./icons";

const Links = () => {
  const { isDarkMode, toggle } = useDarkMode();

  const description = bioData[0].descShow ? bioData[0].description : "";
  const subdesc = bioData[0].subdescShow ? bioData[0].subdesc : "";

  const social = allLinks.filter((el) => el.type === "social" && el.on);
  const contacts = allLinks.filter((el) => el.type === "contacts" && el.on);
  const addresses = allLinks.filter((el) => el.type === "addresses" && el.on);

  return (
    <LinkWrapper>
      <ThemeToggle onClick={toggle}>
        <span className={isDarkMode ? "icon-moon" : "icon-sun"} />
      </ThemeToggle>

      <LinkContainer>
        <TopPart>
          <LinkHeader>
            <Banner>
              <img src="/small-banner.png" alt="AutoShina Banner" />
            </Banner>
          </LinkHeader>

          <LinkBio>
            {description && <h1>{description}</h1>}
            {subdesc && <h4>{subdesc}</h4>}
          </LinkBio>

          <WebLinkWrap>
            {/* --- Соцсети --- */}
            <LinkSection className="social">
              <div className="iconsonly">
                {social.map((i) => (
                  <a
                    href={i.url}
                    key={i.title}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <SocialLinkBox className="socialIcon">
                      <img src={i.icon} alt={i.title} />
                    </SocialLinkBox>
                  </a>
                ))}
              </div>
            </LinkSection>

            {/* --- Контакты --- */}
            <LinkSection>
              <h3>Контакты</h3>
              {contacts.map((c, idx) => (
                <LinkBox key={idx}>
                  {c.leadIcon && (
                    <LeadIcon>
                      <img src={c.leadIcon} alt="icon" />
                    </LeadIcon>
                  )}
                  <LinkTitle>
                    {c.title}
                    {c.link && (
                      <a
                        href={c.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: "var(--color-accent, #5b6fa4)",
                          textDecoration: "none",
                        }}
                      >
                        {c.linkText}
                      </a>
                    )}
                  </LinkTitle>

                  {/* --- Новая кнопка копирования --- */}
                  {c.copy && (
                    <CopyButton
                      onClick={() => {
                        window.location.href = c.copy;
                      }}
                      title="Скопировать номер"
                    >
                      <img src="/share.png" alt="copy" />
                    </CopyButton>
                  )}
                </LinkBox>
              ))}
            </LinkSection>

            {/* --- Адреса --- */}
            <LinkSection>
              <h3>Адреса</h3>
              {addresses.map((a, idx) => (
                <LinkBox key={idx}>
                  {a.leadIcon && (
                    <LeadIcon>
                      <img src={a.leadIcon} alt="geo" />
                    </LeadIcon>
                  )}
                  <LinkTitle>
                    <a
                      href={a.mapLink}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                      }}
                    >
                      {a.title}
                    </a>
                  </LinkTitle>
                </LinkBox>
              ))}
            </LinkSection>
          </WebLinkWrap>
        </TopPart>
      </LinkContainer>
    </LinkWrapper>
  );
};

export default Links;

// ---------- СТИЛИ ----------

const LinkWrapper = styled(Container)``;

const LinkContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px;
`;

const Banner = styled.div`
  max-width: 250px;
  width: 100%;
  margin: 0 auto 12px auto;
  margin-top: 24px;
  border-radius: 12px;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 12px;
  }
`;

const LinkHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
`;

const LinkBio = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 22px;
    line-height: 30px;
    font-weight: 500;
    padding: 0 20px;
  }
  h4 {
    font-size: 18px;
    margin: 10px 0;
    color: ${({ theme }) => theme.text.secondary};
    font-weight: 500;
  }
`;

const TopPart = styled.div``;

const WebLinkWrap = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    padding: 0 12px;
  }
`;

const LinkSection = styled.div`
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 400px;

  &.social {
    max-width: max-content;
    padding: 0;
    margin-bottom: 18px;
  }

  .iconsonly {
    display: flex;
    justify-content: center;
  }

  h3 {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 4px;
    color: ${({ theme }) => theme.text.secondary};
    opacity: 0.8;
  }
`;

const LinkBox = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 14px 18px;
  border-radius: 12px;
  margin: 8px 0;
  border: 1px solid
    ${({ theme }) =>
      theme.name === "dark" ? "rgba(255, 255, 255, 0.2)" : theme.bg.secondary};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  font-size: 16px;
  font-weight: 600;
  background: ${({ theme }) =>
    theme.name === "dark" ? "rgba(255, 255, 255, 0.05)" : "transparent"};
  color: ${({ theme }) =>
    theme.name === "dark" ? "var(--color-neutral-100)" : "inherit"};
  transition: all 0.25s ease;

  &:hover {
    background: ${({ theme }) =>
      theme.name === "dark"
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(0, 0, 0, 0.03)"};
  }
`;

const SocialLinkBox = styled.div`
  padding: 18px 20px;
  border-radius: 12px;
  margin: 8px 18px;
  border: 1px solid
    ${({ theme }) =>
      theme.name === "dark" ? "rgba(255, 255, 255, 0.2)" : theme.bg.secondary};
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.5px;
  position: relative;
  text-align: center;
  color: ${({ theme }) =>
    theme.name === "dark" ? "var(--color-neutral-100)" : "inherit"};
  background: ${({ theme }) =>
    theme.name === "dark" ? "rgba(255, 255, 255, 0.05)" : "transparent"};

  &::before {
    content: "";
    border-radius: 12px;
    display: block;
    position: absolute;
    z-index: -1;
    inset: -2px;
    opacity: 0;
    transform: scale(0.8);
  }
  &:hover {
    transition: all 333ms ease 0s;
    border-color: ${({ theme }) =>
      theme.name === "dark" ? "rgba(255, 255, 255, 0.3)" : "transparent"};
    background: ${({ theme }) =>
      theme.name === "dark" ? "rgba(255, 255, 255, 0.1)" : "transparent"};
    &::before {
      opacity: 1;
      background: ${({ theme }) =>
        theme.name === "dark" ? "rgba(255, 255, 255, 0.15)" : theme.bg.hover};
      transition: all 333ms ease 0s;
      transform: scale(1);
    }
  }

  &.socialIcon {
    padding: 12px;
    border-radius: 50%;
    border: none;
    margin: 4px;
    background: ${({ theme }) =>
      theme.name === "dark"
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.05)"};

    img {
      height: 20px;
      filter: ${({ theme }) =>
        theme.name === "dark" ? "invert(1) brightness(100%)" : "none"};
    }

    &:hover {
      background: ${({ theme }) =>
        theme.name === "dark"
          ? "rgba(255, 255, 255, 0.2)"
          : "rgba(0, 0, 0, 0.1)"};
    }

    @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
      padding: 8px;
      margin: 2px;
      img {
        height: 16px;
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.deviceSize.tablet}) {
    padding: 16px 18px;
    font-size: 15px;
  }

  .icon-external-link {
    font-size: 20px;
    opacity: 0.7;
    color: ${({ theme }) =>
      theme.name === "dark" ? "var(--color-neutral-100)" : "inherit"};
  }
`;

const LeadIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 18px;
    height: 18px;
    filter: ${({ theme }) => (theme.name === "dark" ? "invert(1)" : "none")};
    opacity: 0.9;
  }
`;

const LinkTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  text-align: left;
  a {
    color: var(--color-accent, #5b6fa4);
  }
`;

const CopyButton = styled.button`
  margin-left: auto;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  opacity: 0.8;

  img {
    width: 18px;
    height: 18px;
    filter: ${({ theme }) =>
      theme.name === "dark" ? "invert(1)" : "none"};
    transition: transform 0.2s ease;
  }

  &:hover {
    background: ${({ theme }) =>
      theme.name === "dark"
        ? "rgba(255,255,255,0.1)"
        : "rgba(0,0,0,0.05)"};
    opacity: 1;

    img {
      transform: scale(1.1);
    }
  }

  &:active img {
    transform: scale(0.95);
  }
`;


const ThemeToggle = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.bg.secondary};
  }
  span {
    font-size: 24px;
    color: ${({ theme }) => theme.text.primary};
  }
`;
