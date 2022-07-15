import { render, screen } from '@testing-library/react'
import ConanFooter from '@/components/footer'

const itif = (condition) => condition ? it : it.skip;

describe('ConanFooter Elements', () => {

  const test_elements = {
    contentinfo: [""],
    list: [""],
    link: ["twitter", "facebook", "slack", "github", "Download", "Conan-Center", "GitHub", "Docs", "Blog", "Privacy Policy", "Terms", "", "Github", "Twitter", "Facebook", "Slack #conan"],
    img: ["twitter", "facebook", "slack", "github"],
    heading: ["GET", "Resources", "Legal", "Social"],
  }

  for (const key in test_elements){
    for (const element of test_elements[key]) {
      itif(process.env.JEST_ALLOW_INTEG==='true')(key + ' to:' + element, () => {
        render(<ConanFooter />)
        const expected = screen.getByRole(key, {
          name: element,
        })
        expect(expected).toBeInTheDocument()
      })
    }
  }
})
