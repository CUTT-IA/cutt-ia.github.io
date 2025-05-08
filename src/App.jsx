import { motion, useScroll, useTransform } from "framer-motion";
import styled from "@emotion/styled";
import {
  FaRobot,
  FaBolt,
  FaShieldAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Navbar = styled(motion.nav)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(37, 99, 235, 0.1);
`;

const NavContent = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: 800;
  color: #1a365d;
  letter-spacing: -0.5px;
  text-transform: uppercase;

  img {
    height: 40px;
    width: auto;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 2.5rem;
  align-items: center;
`;

const NavLink = styled(motion.a)`
  text-decoration: none;
  color: #1a365d;
  font-weight: 600;
  font-size: 1rem;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #2563eb;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #2563eb;
    &::after {
      width: 100%;
    }
  }

  &.active {
    color: #2563eb;
    &::after {
      width: 100%;
    }
  }
`;

const Hero = styled(motion.section)`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-top: 70px;
`;

const HeroContent = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 4rem 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 2rem;
  line-height: 1.1;
  color: #1a365d;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #4a5568;
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Button = styled(motion.a)`
  display: inline-block;
  background: #2563eb;
  color: white;
  padding: 1.2rem 2.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: #1d4ed8;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(37, 99, 235, 0.3);
  }
`;

const Features = styled(motion.section)`
  padding: 120px 0;
  background: white;
  position: relative;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled(motion.div)`
  font-size: 2.5rem;
  color: #2563eb;
  margin-bottom: 1.5rem;
  background: #f8fafc;
  width: 80px;
  height: 80px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.1);
`;

const Partners = styled(motion.section)`
  padding: 100px 0;
  background: #f8fafc;
  text-align: center;
`;

const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 4rem;
  align-items: center;
  justify-items: center;
  margin-top: 3rem;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`;

const PartnerLogo = styled(motion.img)`
  height: 80px;
  width: auto;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;

  &:hover {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.1);
  }
`;

const Demo = styled(motion.section)`
  padding: 120px 0;
  background: white;
  text-align: center;
  position: relative;
`;

const Contact = styled(motion.section)`
  padding: 120px 0;
  background: #f8fafc;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  color: #4a5568;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  padding: 0.75rem;
  border-radius: 50%;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  &:hover {
    color: #2563eb;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(37, 99, 235, 0.1);
  }
`;

const Footer = styled.footer`
  background: white;
  padding: 3rem 0;
  text-align: center;
  color: #4a5568;
  border-top: 1px solid #e2e8f0;
`;

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["features", "demo", "partners", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || "");
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const targetId = e.target.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);

  return (
    <>
      <Navbar
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: isScrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "rgba(255, 255, 255, 0.8)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(10px)",
        }}
      >
        <NavContent>
          <Logo
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img src="/src/assets/icon_b_rad.png" alt="CUTT-IA Logo" />
            CUTT-IA
          </Logo>
          <NavLinks>
            {["Features", "Demo", "Partners", "Contact"].map((item) => (
              <NavLink
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={activeSection === item.toLowerCase() ? "active" : ""}
              >
                {item}
              </NavLink>
            ))}
          </NavLinks>
        </NavContent>
      </Navbar>

      <Hero>
        <HeroContent
          style={{ opacity, scale }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Revolutionizing Industrial Cutting with AI
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            An advanced industrial software solution that automates and
            optimizes cutting processes for metal profiles and beams. Developed
            through collaboration between BLM Group and Politecnico di Milano.
          </Subtitle>
          <Button
            href="https://cutt-ia.vercel.app/"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Try Live Demo
          </Button>
        </HeroContent>
      </Hero>

      <Features
        id="features"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Container>
          <Title>Advanced Features</Title>
          <FeaturesGrid>
            {[
              {
                icon: <FaRobot />,
                title: "AI-Driven Optimization",
                description:
                  "Leverage advanced AI algorithms for cutting parameter optimization and technology selection.",
              },
              {
                icon: <FaBolt />,
                title: "Multi-Technology Analysis",
                description:
                  "Compare laser and plasma cutting technologies with comprehensive cost and sustainability modeling.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Tekla Integration",
                description:
                  "Seamless integration with Tekla Structures for direct import of structural profiles.",
              },
            ].map((feature, index) => (
              <FeatureCard
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <IconWrapper
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  {feature.icon}
                </IconWrapper>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                    color: "#1a365d",
                  }}
                >
                  {feature.title}
                </h3>
                <p style={{ color: "#4a5568", lineHeight: "1.6" }}>
                  {feature.description}
                </p>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Container>
      </Features>

      <Partners
        id="partners"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Container>
          <Title>Our Partners</Title>
          <Subtitle>
            Proudly developed in collaboration with industry leaders
          </Subtitle>
          <PartnersGrid>
            <PartnerLogo
              src="/src/assets/PoliMi.svg"
              alt="Politecnico di Milano"
              whileHover={{ scale: 1.1 }}
            />
            <PartnerLogo
              src="/src/assets/BLM.png"
              alt="BLM Group"
              whileHover={{ scale: 1.1 }}
            />
          </PartnersGrid>
        </Container>
      </Partners>

      <Demo
        id="demo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Container>
          <Title>Experience CUTT-IA</Title>
          <Subtitle>
            Discover how our AI-driven solution can optimize your cutting
            processes, reduce costs, and improve sustainability in industrial
            applications.
          </Subtitle>
          <Button
            href="https://cutt-ia.vercel.app/"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Launch Demo
          </Button>
        </Container>
      </Demo>

      <Contact
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Container>
          <Title>Get in Touch</Title>
          <Subtitle>
            Interested in learning more about CUTT-IA? Contact us for a
            demonstration.
          </Subtitle>
          <Button
            href="mailto:murat.guven@polimi.it"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </Button>
          <SocialLinks>
            <SocialLink
              href="https://github.com/likemaestro/CUTT-IA"
              target="_blank"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/muratguvenn/"
              target="_blank"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </SocialLink>
          </SocialLinks>
        </Container>
      </Contact>

      <Footer>
        <Container>
          <p>
            &copy; 2024 BLM Group & Politecnico di Milano. All rights reserved.
          </p>
        </Container>
      </Footer>
    </>
  );
}

export default App;
