docker build \
    --build-arg NODE_ENV=production \
    -t pgphotographie/app:backend-latest  \
    -f Dockerfile.prod .
