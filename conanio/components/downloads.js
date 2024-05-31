import {ConanSignUp} from './signup';


function ConanDownloadsHero() {
  return (
    <section className="downloads-hero position-relative" id="downloadsHero"><img alt="Conan C++ Package Manager"
        className="position-absolute hero-bg downloads-hero-bg d-none d-xl-inline d-only-hero-bg"
        src="downloads-hero-bg-new.svg"></img>
      <div className="container">
        <div className="row">
          <div className="col-12 py-5">
            <h1 className="font-weight-bold text-center">Downloads</h1>
          </div>
        </div>
      </div>
    </section>
  )
}


function ConanDownloads() {
  return (
    <section className="pt-0 pb-5" id="downloads">
      <div className="container">
        <div className="row pb-3 main-downloads-row ml-auto mr-auto">
          <div className="col-lg-6 blue-downloads colored-downloads">
            <div className="downloads-item-wrapper">
              <div className="top bg-blue download-col-topper"></div>
              <div className="content px-2 px-md-4 py-2 p-md-4">
                <div className="small-title d-flex align-items-center"><img
                    alt="Downlod Conan Open Source C/C++ Package Manager" className="mr-2 small-title-lazy"
                    src="conan-downloads-logo.svg" style={{ width: '280px' }}></img></div>
                <div className="text pb-1">
                  <p className="py-3 front-text">Install the latest version of the free and open Source Conan C and C++
                    package manager, to start using Conan and downloading packages from the ConanCenter.</p>
                  <p className="mb-2">Recommended install (need python in your system):</p>
                </div>
                <div className="install">
                  <div className="installers pb-4">
                    <div className="package-wrapper d-flex flex-no-wrap mb-0">
                      <div className="cn-box small"><img alt="python" className="lazy"
                          data-src="downloads/python-small-pack.svg"></img></div>
                      <div className="cn-box cn-main copy-text">$ pip install conan</div> <a className="cn-box cn-action cn-copy"
                        data-copy-value="pip install conan" data-os="pypi_homepage" data-placement="top"
                        data-toggle="tooltip"></a>
                    </div>
                  </div>
                  <p>Other Installers:</p>
                  <div className="installers small-installers pb-4">
                    <div className="package-wrapper d-flex flex-no-wrap">
                      <div className="cn-box small"><img alt="Darwin" className="lazy"
                          data-src="downloads/darwin-small-pack.svg"></img></div>
                      <div className="cn-box cn-main copy-text">$ brew install conan</div> <a className="cn-box cn-action cn-copy"
                        data-copy-value="brew install conan" data-os="brew_homepage" data-placement="top"
                        data-toggle="tooltip"></a>
                    </div>
                    <div className="package-wrapper d-flex flex-no-wrap">
                      <div className="cn-box small"><img alt="Debian" className="lazy"
                          data-src="downloads/debian-small-pack.svg"></img></div>
                      <div className="cn-box cn-main">Ubuntu / Debian X64 Installer</div> <a
                        className="cn-box cn-action cn-download" data-os="ubuntu"
                        href="https://github.com/conan-io/conan/releases/latest/download/conan-ubuntu-64.deb"></a>
                    </div>
                    <div className="package-wrapper normal-dropdown d-flex flex-no-wrap">
                      <div className="cn-box small"><img alt="Windows" className="lazy"
                          data-src="downloads/windows-small-pack.png" style={{ width: '30px' }}></img></div>
                      <div className="cn-box cn-main cn-dropdown">
                        <div className="dropdown"> <button aria-expanded="false" aria-haspopup="true"
                            className="btn dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButton" type="button">
                            Download x86_64 </button>
                          <div aria-labelledby="dropdownMenuButton" className="dropdown-menu"><a className="dropdown-item"
                              data-href="https://github.com/conan-io/conan/releases/latest/download/conan-win-64.exe">Download x86_64
                            </a><a className="dropdown-item"
                              data-href="https://github.com/conan-io/conan/releases/latest/download/conan-win-32.exe">Download x86
                            </a></div>
                        </div>
                      </div> <a className="cn-box cn-action cn-download" data-os="windows"
                        href="https://github.com/conan-io/conan/releases/latest/download/conan-win-64.exe"></a>
                    </div>
                    <div className="package-wrapper d-flex flex-no-wrap">
                      <div className="cn-box small"><img alt="Arc Linux" className="lazy"
                          data-src="downloads/archlinux-small-pack.svg"></img></div>
                      <div className="cn-box cn-main copy-text">$ yay -S conan</div> <a className="cn-box cn-action cn-copy"
                        data-copy-value="yay -S conan" data-os="arch_aur_homepage" data-placement="top"
                        data-toggle="tooltip"></a>
                    </div>
                    <div className="package-wrapper d-flex flex-no-wrap">
                      <div className="cn-box small"><img alt="Github" className="lazy"
                          data-src="downloads/github-small-pack.svg"></img></div>
                      <div className="cn-box cn-main">Any OS:From Source</div> <a className="cn-box cn-action cn-link"
                        data-os="github" href="https://github.com/conan-io/conan" rel="nofollow" target="_blank"></a>
                    </div>
                  </div>
                  <div className="left-downloads-spacer"></div>
                  <div className="text text-two">
                    <p className="text-break">Read more about Conan installation:<br/><a className="text-break"
                        href="https://docs.conan.io/en/latest/installation.html">https://docs.conan.io/en/latest/installation.html
                      </a></p>
                  </div>
                </div>
                <div className="cta-wrapper"><a className="ncta bg-blue d-inline-block"
                    href="https://docs.conan.io/en/latest/getting_started.html">Getting Started With Conan </a></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-3 mt-lg-0 green-downloads colored-downloads">
            <div className="downloads-item-wrapper">
              <div className="top bg-green download-col-topper"></div>
              <div className="content px-2 px-md-4 py-2 p-md-4">
                <div className="small-title d-flex align-items-center"><img
                    alt="Downlod JFrog Artifactory Community Edition for C/C++" className="mr-2 lazy"
                    src="arti-downloads-logo.svg" style={{ width: '200px' }}></img></div>
                <div className="text pb-1">
                  <p className="py-3 front-text">Download the latest version of JFrog Artifactory Community Edition to host
                    your own private packages on your own server - for free.</p>
                  <p className="mb-2">Download:</p>
                </div>
                <div className="install">
                  <div className="installers pb-4">
                    <div className="package-wrapper mb-0 d-flex flex-wrap align-items-center position-relative" id="artifactoryZipPackage">

                      <div className="d-flex">
                        <div className="cn-box cn-main" id="artiZipMain">Download tar.gz</div>
                        <a
                          className="cn-box cn-action cn-download" data-tech="zip"
                          href="https://releases.jfrog.io/artifactory/bintray-artifactory/org/artifactory/cpp/ce/jfrog-artifactory-cpp-ce/[RELEASE]/jfrog-artifactory-cpp-ce-[RELEASE]-linux.tar.gz">
                        </a>
                      </div>

                      <span className="d-none mx-2 d-md-inline-block">or</span>

                      <a
                        href="https://jfrog.com/artifactory/start-free/?isConan=true"
                        className="ncta bg-green d-block mt-2 mt-md-0 fcv-cta position-relative"
                        target="_blank" rel="noopener">
                        <span className="w-100 h-100 d-flex align-items-center justify-content-center h-100">
                          Free Cloud Version
                        </span>

                        <div
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Create a free JFrog Artifactory &#010;Cloud server to host your own &#010; private packages (Conan and &#010; multiple other types)"
                          className="position-absolute info-circle">
                          <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8.55371" cy="8.75" r="8" stroke="#3D3D3D"/>
                          <path d="M7.59971 5.6065C7.59971 5.7885 7.72971 5.9055 7.91171 5.9055H9.01671C9.19871 5.9055 9.30271 5.8015 9.30271 5.6065V4.6185C9.30271 4.4365 9.21171 4.2935 9.01671 4.2935H7.91171C7.70371 4.2935 7.59971 4.4235 7.59971 4.6185V5.6065ZM7.69071 13.5625H9.19871V6.6595H7.69071V13.5625Z" fill="#3D3D3D"/>
                          </svg>
                        </div>

                      </a>

                    </div>
                  </div>
                  <p>Other Installers:</p>
                  <div className="installers small-installers pb-4">
                    <div className="package-wrapper d-flex flex-no-wrap">
                      <div className="cn-box small"><img alt="Linux" className="lazy"
                          data-src="downloads/linux-small-pack.svg"></img></div>
                      <div className="cn-box cn-main">Linux Installer</div> <a className="cn-box cn-action cn-download"
                        data-tech="linux"
                        href="https://releases.jfrog.io/artifactory/bintray-artifactory/org/artifactory/cpp/ce/jfrog-artifactory-cpp-ce/[RELEASE]/jfrog-artifactory-cpp-ce-[RELEASE]-linux.tar.gz"></a>
                    </div>
                    <div className="package-wrapper package-copy-plus-download d-flex flex-no-wrap position-relative">
                      <textarea className="position-absolute" cols="1" id="artiRpm"
                        rows="1">#Add artifactory.repo file to your yum repository listsudo vi /etc/yum.repos.d/artifactory.repo#Add the following content[Artifactory]name=Artifactorybaseurl=https://releases.jfrog.io/artifactory/artifactory-rpms/enabled=1gpgcheck=0#Optional - if you have GPG signing keys installed, use the below flags to verify the repository metadata signature:#gpgkey=https://releases.jfrog.io/artifactory/artifactory-rpms/{'{PATH_TO_REPODATA_FOLDER}'}/repomd.xml.key#repo_gpgcheck=1#Run the install commandyum update && yum install jfrog-artifactory-cpp-ce </textarea>
                      <div className="cn-box small"><img alt="rpm" className="lazy" data-src="downloads/rpm-small-pack.png"></img>
                      </div>
                      <div className="cn-box cn-main cn-dropdown">
                        <div className="dropdown"> <button aria-expanded="false" aria-haspopup="true"
                            className="btn dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButtonRPM" type="button">
                            RPM Installer </button>
                          <div aria-labelledby="dropdownMenuButton" className="dropdown-menu"><a
                              className="dropdown-item dropdown-item-download">RPM Installer </a><a
                              className="dropdown-item dropdown-item-copy">Copy install command </a></div>
                        </div>
                      </div> <a className="cn-box cn-action cn-download" data-copy-target="textarea#artiRpm"
                        data-href="https://releases.jfrog.io/artifactory/artifactory-rpms/jfrog-artifactory-cpp-ce/jfrog-artifactory-cpp-ce-[RELEASE].rpm"
                        data-tech="rpm"
                        href="https://releases.jfrog.io/artifactory/artifactory-rpms/jfrog-artifactory-cpp-ce/jfrog-artifactory-cpp-ce-[RELEASE].rpm"></a>
                    </div>
                    <div className="package-wrapper package-copy-plus-download d-flex flex-no-wrap position-relative">
                      <textarea className="position-absolute" cols="1" id="artiDebian"
                        rows="1">wget -qO - https://releases.jfrog.io/artifactory/api/gpg/key/public | apt-key add -;echo "deb https://releases.jfrog.io/artifactory/artifactory-debs{'{'}distribution{'}'} main" | sudo tee -a /etc/apt/sources.list;# To determine your distribution, run lsb_release -c or cat /etc/os-release# Example:echo "deb https://releases.jfrog.io/artifactory/artifactory-debs xenial main" | sudo tee -a /etc/apt/sources.list;apt-get update;sudo apt-get install jfrog-artifactory-cpp-ce </textarea>
                      <div className="cn-box small"><img alt="debian" className="lazy"
                          data-src="downloads/debian-small-pack.svg"></img></div>
                      <div className="cn-box cn-main cn-dropdown">
                        <div className="dropdown"> <button aria-expanded="false" aria-haspopup="true"
                            className="btn dropdown-toggle" data-toggle="dropdown" id="dropdownMenuButtonDebian"
                            type="button">Debian Installer </button>
                          <div aria-labelledby="dropdownMenuButton" className="dropdown-menu"><a
                              className="dropdown-item dropdown-item-download">Debian Installer </a><a
                              className="dropdown-item dropdown-item-copy">Copy install command </a></div>
                        </div>
                      </div> <a className="cn-box cn-action cn-download" data-copy-target="textarea#artiDebian"
                        data-href="https://releases.jfrog.io/artifactory/artifactory-debs/pool/jfrog-artifactory-cpp-ce/jfrog-artifactory-cpp-ce-[RELEASE].deb"
                        data-tech="debian"
                        href="https://releases.jfrog.io/artifactory/artifactory-debs/pool/jfrog-artifactory-cpp-ce/jfrog-artifactory-cpp-ce-[RELEASE].deb"></a>
                    </div>
                    <div className="package-wrapper d-flex flex-no-wrap">
                      <div className="cn-box small"><img alt="Windows" className="lazy"
                          data-src="downloads/windows-small-pack.png" style={{ width: '30px' }}></img></div>
                      <div className="cn-box cn-main">Windows Installer</div> <a className="cn-box cn-action cn-download"
                        data-tech="windows"
                        href="https://releases.jfrog.io/artifactory/bintray-artifactory/org/artifactory/cpp/ce/jfrog-artifactory-cpp-ce/[RELEASE]/jfrog-artifactory-cpp-ce-[RELEASE]-windows.zip"></a>
                    </div>
                    <div className="package-wrapper d-flex flex-no-wrap">
                      <div className="cn-box small"><img alt="Windows" className="lazy"
                          data-src="downloads/compose-small-pack.svg"></img></div>
                      <div className="cn-box cn-main">Docker Compose Installer</div> <a className="cn-box cn-action cn-download"
                        data-tech="docker_compose"
                        href="https://releases.jfrog.io/artifactory/bintray-artifactory/org/artifactory/cpp/ce/docker/jfrog-artifactory-cpp-ce/[RELEASE]/jfrog-artifactory-cpp-ce-[RELEASE]-compose.tar.gz"></a>
                    </div>
                    <div className="package-wrapper d-flex flex-no-wrap has-multiline-text">
                      <div className="cn-box small"><img alt="Arc Linux" className="lazy"
                          data-src="downloads/docker-small-pack.png"></img></div> <a
                        className="cn-box cn-main copy-text show-full-command" data-toggle="tooltip"
                        title="docker run --name artifactory -d -p 8081:8081 -p 8082:8082 docker.bintray.io/jfrog/artifactory-cpp-ce:latest"><span
                          className="in-copy-text">$ docker run ... </span></a><a className="cn-box cn-action cn-copy-multiline"
                        data-copy-target="textarea#dockerCommand" data-placement="top" data-tech="docker"
                        data-toggle="tooltip"></a><textarea className="position-absolute"
                        id="dockerCommand">docker run --name artifactory -d -p 8081:8081 -p 8082:8082 docker.bintray.io/jfrog/artifactory-cpp-ce:latest </textarea>
                    </div>
                    <div className="package-wrapper d-flex flex-no-wrap">
                      <div className="cn-box small"><img alt="Darwin" className="lazy"
                          data-src="downloads/darwin-small-pack.svg"></img></div>
                      <div className="cn-box cn-main">Darwin Installer</div> <a className="cn-box cn-action cn-download"
                        data-tech="darwin"
                        href="https://releases.jfrog.io/artifactory/bintray-artifactory/org/artifactory/cpp/ce/jfrog-artifactory-cpp-ce/[RELEASE]/jfrog-artifactory-cpp-ce-[RELEASE]-darwin.tar.gz"></a>
                    </div>
                  </div>
                  <div className="cta-wrapper"><a className="ncta bg-green d-inline-block mt-0"
                      href="https://docs.conan.io/en/latest/uploading_packages/artifactory/artifactory_ce.html">Getting Started with
                      Artifactory CE </a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5 download-questions">
          <div className="col-12 text-center">
            <h2 className="font-weight-bold pb-3">Questions about Installation?</h2>
            <p>Check the Docs, contact the community on Slack, or ask for support in Github</p>
            <div className="d-flex justify-content-center mt-4"><a className="q-box d-block" href="https://docs.conan.io/">
                <div className="q-top"><img alt="Docs" src="docs.svg"></img></div>
                <div className="q-title text-center mt-1">Docs</div>
              </a><a className="q-box d-block" href="https://cpplang.slack.com/?id=conan">
                <div className="q-top"><img alt="Docs" src="social/slack.svg"></img></div>
                <div className="q-title text-center mt-1">Slack</div>
              </a><a className="q-box d-block" href="https://github.com/conan-io/conan/issues" rel="nofollow">
                <div className="q-top"><img alt="Docs" src="social/github.svg"></img></div>
                <div className="q-title text-center mt-1">Github</div>
              </a></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ConanDownloadsComponent() {
  return (
    <div>
      <ConanDownloadsHero/>
      <ConanDownloads/>
      <ConanSignUp/>
    </div>
  )
}
