import styles from "./style.module.css";

export default function Home() {
  return (
    <body className={styles.body}>
      {/* <div className={styles.container}> */}
      <section className={styles.firstContainer}>
        <header className={styles.header}>
          <a href="#" className={styles.logo}>
            <img src="/icons/biccas.svg" alt="biccas logo" />
          </a>
          <nav className={styles.navbar}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
            </ul>
          </nav>
          <div className={styles.buttons1}>
            <a href="#">Login</a>
            <a href="#">
              <button className={styles.signup}>Sign up</button>
            </a>
          </div>
        </header>

        <section className={styles.hero}>
          <div className={styles.firstCol}>
            <h1>We’re here to Increase your Productivity</h1>
            <img src="/icons/horizontal_line.svg" alt="line" />
            <p>
              Let's make your work more organize and easily using the Taskio
              Dashboard with many of the latest <br /> features in managing work
              every day.
            </p>

            <div className={styles.buttons2}>
              <a href="#">
                <button>Try free trial</button>
              </a>
              <a href="#" className={styles.demo}>
                <img src="/icons/play.svg" alt="play" />
                <span>View demo</span>
              </a>
            </div>
          </div>

          <div className={styles.secondCol}>
            <img src="/imgs/man.png" alt="man" />
          </div>
        </section>

        <section className={styles.clientele}>
          <h1>More than 25,000 teams use Collabs</h1>
          <ul>
            <li>
              <img src="/icons/unsplash.svg" alt="unsplash" />
              Unsplash
            </li>
            <li>
              <img src="/icons/notion.svg" alt="notion" />
              Notion
            </li>
            <li>
              <img src="/icons/intercom.svg" alt="intercom" />
              INTERCOM
            </li>
            <li>
              <img src="/icons/descript.svg" alt="descript" />
              descript
            </li>
            <li>
              <img src="/icons/grammarly.svg" alt="grammarly" />
              grammarly
            </li>
          </ul>
        </section>
      </section>

      <section className={styles.secondContainer}>
        <section className={styles.partnerSupport}>
          <div className={styles.firstCol}>
            <h1>How we support our partner all over the world</h1>
            <p>
              SaaS become a common delivery model for many business application,
              including office software, messaging software, payroll processing
              software, DBMS software, management software
            </p>
            <div className={styles.stars}>
              <div>
                <img src="/icons/star-rating1.svg" alt="stars" />
                <p>
                  4.9 / <span>5 rating</span>
                </p>
                <p>databricks</p>
              </div>
              <div>
                <img src="/icons/star-rating2.svg" alt="stars" />
                <p>
                  4.9 / <span>5 rating</span>{" "}
                </p>
                <p>Chainalysis</p>
              </div>
            </div>
          </div>

          <div className={styles.secondCol}>
            <div className={styles.section}>
              <img
                src="/icons/publishing.svg"
                alt="publish"
                className={styles.icon}
              />
              <div className={styles.content}>
                <h4>Publishing</h4>
                <p>
                  Plan, collaborate, and publishing your content that drivees
                  meaningful engagement and growth <br /> for your barnd
                </p>
              </div>
            </div>

            <div className={styles.section}>
              <img
                src="/icons/analytics.svg"
                alt="analytics"
                className={styles.icon}
              />
              <div className={styles.content}>
                <h4>Analytics</h4>
                <p>Analyze your performance and create gorgeous reports</p>
              </div>
            </div>

            <div className={styles.section}>
              <img
                src="/icons/engagement.svg"
                alt="engage"
                className={styles.icon}
              />
              <div className={styles.content}>
                <h4>Engagement</h4>
                <p>Quickly navigate and engage with your audience</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className={styles.features}>
        <div className={styles.featureMenu}>
          <h1>Our Features you can get</h1>
          <p>
            We offer a variety of interesting features that can help increase
            your productivity at work and manage your projects easily
          </p>
          <button className={styles.getStarted}>Get started</button>
        </div>

        <ul className={styles.featureList}>
          <li>
            <img src="/imgs/collab.png" alt="collab" />
            <p className={styles.feature}>Collaboration Teams</p>
            <p className={styles.featureDetails}>
              Here you can handle projects together with team virtually
            </p>
          </li>
          <li>
            <img src="/imgs/cloud.png" />
            <p className={styles.feature}>Cloud Storage</p>
            <p className={styles.featureDetails}>
              No need to worry about storage because we provide storage up to 2
              TB
            </p>
          </li>
          <li>
            <img src="/imgs/analytics.png" alt="daily analytics" />
            <p className={styles.feature}>Daily Analytics</p>
            <p className={styles.featureDetails}>
              We always provide useful information to make it easier for you
              every day
            </p>
          </li>
        </ul>
      </section>

      <section className={styles.thirdContainer}>
        <section className={styles.benefits}>
          <div className={styles.firstCol}>
            <h1>What Benefit Will You Get</h1>
            <ul>
              <li>
                <img src="/icons/check-mark.svg" alt="check" />
                <span>Free Consulting With Expert Saving Money</span>
              </li>
              <li>
                <img src="/icons/check-mark.svg" alt="check" />
                <span>Online Banking</span>
              </li>
              <li>
                <img src="/icons/check-mark.svg" alt="check" />
                <span>Investment Report Every Month</span>
              </li>
              <li>
                <img src="/icons/check-mark.svg" alt="check" />
                <span>Saving Money For The Future</span>
              </li>
              <li>
                <img src="/icons/check-mark.svg" alt="check" />
                <span>Online Transaction</span>
              </li>
            </ul>
          </div>
          <div className={styles.secondCol}>
            <img src="/imgs/benefit-image.png" alt="benefit" />
          </div>
        </section>
      </section>

      <section className={styles.fourthContainer}>
        <section className={styles.plans}>
          <h1>
            Choose Plan <br /> That’s Right For You
          </h1>
          <p className={styles.plan}>
            Choose plan that works best for you, feel free to contact us
          </p>
          <div className={styles.outerDiv}>
            <button>Bill Monthly</button>
            <button className={styles.innerDiv}>Bill Yearly</button>
          </div>

          <div className={styles.cols}>
            <div className={styles.firstCol}>
              <p>Free</p>
              <p>
                Have a go and test your <br /> superpowers
              </p>
              <h1>0</h1>

              <div className={styles.innerCol}>
                <ul>
                  <li>
                    <img src="/icons/check-mark.svg" alt="check" />
                    <span>2 Users</span>
                  </li>
                  <li>
                    <img src="/icons/check-mark.svg" alt="check" />
                    <span>2 files</span>
                  </li>
                  <li>
                    <img src="/icons/check-mark.svg" alt="check" />
                    <span>Public Share & Comments</span>
                  </li>
                  <li>
                    <img src="/icons/check-mark.svg" alt="check" />
                    <span>Chat support</span>
                  </li>
                  <li>
                    <img src="/icons/check-mark.svg" alt="check" />
                    <span>New income apps</span>
                  </li>
                </ul>
                <button>New income apps</button>
              </div>
            </div>

            <div className={styles.secondCol}>
              <p>Pro</p>
              <p>
                Experiment the power <br /> of infinite possibilities
              </p>
              <h1>8</h1>
              <button className={styles.save}>Save $50 a year</button>

              <div className={styles.innerCol}>
                <ul>
                  <li>
                    <img src="/icons/check-mark.svg" alt="check" />
                    <span>4 Users</span>
                  </li>
                  <li>
                    <img src="/icons/check-mark.svg" alt="check" />
                    <span>All apps</span>
                  </li>
                  <li>
                    <img src="/icons/check-mark.svg" alt="check" />
                    <span>Unlimited editable exports</span>
                  </li>
                  <li>
                    <img src="/icons/check-mark.svg" alt="check" />
                    <span>Folders and collaboration </span>
                  </li>
                  <li>
                    <img src="/icons/check-mark.svg" alt="check" />
                    <span>All incoming apps</span>
                  </li>
                </ul>
                <button>Go to pro</button>
              </div>
            </div>

            <div className={styles.thirdCol}>
              <p>Business</p>
              <p>
                Unveil new superpowers and <br />
                join the Design Leaque
              </p>
              <h1>16</h1>

              <div className={styles.innerCol}>
                <ul>
                  <li>
                    <img src="/icons/check-mark.svg" alt="check" />
                    <span>All the features of pro plan</span>
                  </li>
                  <li>
                    <img src="/icons/check-mark.svg" alt="check" />
                    <span>Account success Manager</span>
                  </li>
                  <li>
                    <img src="/icons/check-mark.svg" alt="check" />
                    <span>Single Sign-On (SSO)</span>
                  </li>
                  <li>
                    <img src="/icons/check-mark.svg" alt="check" />
                    <span>Co-conception pogram</span>
                  </li>
                  <li>
                    <img src="/icons/check-mark.svg" alt="check" />
                    <span>Collaboration-Soon</span>
                  </li>
                </ul>
                <button>Go to Business</button>
              </div>
            </div>
          </div>
          {/* </ul> */}
        </section>
      </section>

      {/* <section>
        <div className="first-col">
          <h1>People are Saying About DoWhith</h1>
          <p>
            Everything you need to accept to payment and grow your money of
            manage anywhere on planet
          </p>
          <img src="/icons/qoute.svg" alt="quote" />
          <p>
            I am very helped by this E-wallet application , my days are very
            easy to use this application and its very helpful in my life , even
            I can pay a short time 😍
          </p>
          <p>_ Aria Zinanrio</p>
          <ul>
            <li>
              <img src="/imgs/person1.png" alt="person 1" />
            </li>
            <li>
              <img src="/imgs/person2.png" alt="person 2" />
            </li>
            <li>
              <img src="/imgs/person3.png" alt="person 3" />
            </li>
            <li>
              <img src="/imgs/person4.png" alt="person 4" />
            </li>
            <li>
              <img src="/imgs/arrow-right.png" alt="right" />
            </li>
          </ul>
        </div>

        <div className="second-col">
          <img src="/imgs/coins.png" alt="coin" />
          <p>Get Started</p>
          <form action="your-server-endpoint" method="POST">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <br />
            <label htmlFor="text">Message</label>
            <input
              type="text"
              id="text"
              name="text"
              placeholder="What are you say?"
              required
            />
            <br />
            <button type="submit">Request Demo</button>
          </form>
          <p>
            or <span>Start Free Trial </span>
          </p>
        </div>
      </section> */}

      {/* <footer>
        <div className="first-col">
          <img src="/icons/biccas.svg" alt="biccas" />
          <p>Get started now try our product</p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email here"
            />
            <img src="/icons/enter.svg" alt="enter" />
          </div>
        </div>
        <div className="second-col">
          <ul>
            <p>Support</p>
            <li>Help centre</li>
            <li>Account information</li>
            <li>About</li>
            <li>Contact us</li>
          </ul>

          <ul>
            <p> Help and Solution</p>
            <li>Talk to support</li>
            <li>Support docs</li>
            <li>System status</li>
            <li>Covid responde</li>
          </ul>

          <ul>
            <p>Product</p>
            <li> Update</li>
            <li>Security</li>
            <li> Beta test</li>
            <li>Pricing product</li>
          </ul>
        </div>

        <div>
          <p> © 2022 Biccas Inc. Copyright and rights reserved</p>
          <p>Terms and Condtions . Privacy Policy</p>
        </div>
      </footer> */}
      {/* </div> */}
    </body>
  );
}
